const mongoose = require('../mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Hero', new Schema({
  heroName: {type: String},
  imageUrl: {type: String}
}))
