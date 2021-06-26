const express = require('express')
const route = require('./route')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

//configuracao middleware (pega o conteudo que esta vindo na url decodifica e passar para o controller)
server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3000, () => console.log("Rodando"))