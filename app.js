const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

app.listen(3000, () => {
  console.log('server is running at 3000')
})