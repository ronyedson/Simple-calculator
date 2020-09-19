
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector('.keys')
const display = calculator.querySelector('.currenctNumbers')
let result = 0  


function calculate(n) {
    n = n.split(" ")
    for (let index = 0; index < n.length; index++) {
        switch (n[index]) {
            case "+":
                if (index == 1){
                    result = +n[index-1] + +n[index+1]
                }
                else{
                    result = result + +n[index+1]
                }
                break;
            
            case "-":
                if (index == 1){
                    result = +n[index-1] - +n[index+1]
                }
                else{
                    result = result - +n[index+1]
                }
                break;
            case "X":
                if (index == 1){
                    result = +n[index-1] * +n[index+1]
                }
                else{
                    result = result * +n[index+1]
                }
                break;
            
            case "/":
                if (index == 1){
                    result = +n[index-1] / +n[index+1]
                }
                else{
                    result = result / +n[index+1]
                }
                break;
            default:
                break;
        }
        
    }
    return result


}

keys.addEventListener('click', e => {
    if (e.target.className == 'numbers') {
        if (display.innerHTML.length == 80) {
            return
        }

        if (display.innerHTML == 0){
            display.innerHTML = e.target.value
        }
        else{
            display.innerHTML += e.target.value 
        }
    } else if (e.target.className == 'operations' && display.innerHTML[display.innerHTML.length - 1] != " ") {
        switch (e.target.value) {
                
            case "/":
                display.innerHTML += " / " 
                break;
            
            case "X":
                display.innerHTML += " X "
                break;

            case "-":
                display.innerHTML += " - "
                break;
            
            case "+":
                display.innerHTML += " + "
                break;

            case "=":
                display.innerHTML = calculate(display.innerHTML)
                break;

            default:
                break;
        }
    }
    if(e.target.value == "C") {
        if (display.innerHTML.length < 2){
            display.innerHTML = 0
        }
        else if(display.innerHTML[display.innerHTML.length - 1] == " "){
            display.innerHTML = display.innerHTML.slice(0, -3) 
        }
        else {
            display.innerHTML = display.innerHTML.slice(0, -1)    
        }         
    } else if (e.target.value == "CE") {
        display.innerHTML = '0'
    }
})

