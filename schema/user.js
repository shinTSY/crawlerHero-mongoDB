const mongoose = require('../mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {type: String},
  password: {type: String},
  age: {type: Number},
  birth: {type: Date}
})

module.exports = mongoose.model('User', UserSchema)
