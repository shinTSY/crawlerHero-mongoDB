const Crawler = require("crawler")
const Hero = require('./heros')

let url = 'http://lol.duowan.com/hero/'

let c = new Crawler({
  maxConnections: 10,
  callback(error, res, done) {
    if (error) {
      console.log(error)
    } else {
      let $ = res.$

      $("#champion_list li").each((index, item) => {
        let name = $(item).find('div.champion_name').text().replace('\'', '')
        let img = $(item).find('a.lol_champion img').attr('src')

        let hero = new Hero({
          heroName: name,
          imageUrl: img
        })

        hero.save((err, result) => {
          if (err) return console.log(err)
          console.log(result)
        })

      })
    }
    done()
  }
})

c.queue(url)