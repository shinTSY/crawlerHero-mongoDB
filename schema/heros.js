const mongoose = require('../mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Hero', new Schema({
  heroName: {type: String},
  heroTitle: {type: String},
  imageUrl: {type: String},
  skins: {type: Array},
  bigSkin: {type: Array}
}, {versionKey: false}))
