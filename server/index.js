const express = require("express")
const cors = require('cors')
const app = express()
const PORT = 3333
const router = require('./src/routers/routes')

app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(router)

app.listen(PORT, () => {
    console.log('Aplicação rodando')
})