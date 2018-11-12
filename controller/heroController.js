const Hero = require('../schema/heros')

module.exports = {
  getAllHero(callback) {
    Hero.find((err, result) => {
      callback(result)
    })
  },
  getHeroByName(name, callback) {
    Hero.find({
      'heroName': {
        $regex: name
      }
    }, (err, result) => {
      callback(result)
    })
  },
  deleteById(id, callback){
    Hero.findByIdAndDelete(id, (err, result) => {
      callback(result)
    })
  },
  addHero(obj, callback){
    let hero = new Hero(obj)
    hero.save((err, result) => {
      callback(result)
    })
  },
  updateHeroById(obj, callback){
    Hero.updateOne({
      _id: obj.id
    }, {
      heroName: obj.heroName,
      imageUrl: obj.imageUrl
    }, (err) => {
      if(err) return
      callback('修改成功')
    })
  }
}