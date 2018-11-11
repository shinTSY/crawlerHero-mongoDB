const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1/tsy'

mongoose.connect(DB_URL, {
  useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
  console.log('成功连接到' + DB_URL)
})

mongoose.connection.on('error', (err) => {
  console.log('数据库连接错误' + err)
})

mongoose.connection.on('disconnected', () => {
  console.log('数据库连接已断开')
})

module.exports = mongoose