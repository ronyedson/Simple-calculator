
const keys = [
    "C",
    "CE",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ",",
    "=",
]

const numbers = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "," 
]

async function main(req, res){
    return res.render('src/view/main.html', {keys, numbers})
}

module.exports = {
    main
}