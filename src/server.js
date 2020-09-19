const {main} = require("./pages.js") 

const express = require("express")
const server = express()

const nunjucks = require("nunjucks")
const { static } = require("express")

nunjucks.configure({
    express: server,
    noCache: true
})

server
.use(static('public'))
.get("/", main)
.listen(5000)