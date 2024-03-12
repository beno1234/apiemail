const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const rotas = require('./router/rota')

dotenv.config()

const app = express()
app.use(cors())


// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(rotas)


app.use((req, res)=>{
    res.status(404)
    res.json({erro: 'erro 404'})
})


app.listen(process.env.PORT)