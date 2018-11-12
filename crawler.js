const Crawler = require("crawler")
const fs = require('fs')
const Hero = require('./controller/heroController')

let url = 'http://lol.duowan.com/'

let c1 = new Crawler({
  maxConnections: 10,
  rateLimit: 1000,
  callback(error, res, done) {
    if (error) {
      console.log(error)
    } else {
      let $ = res.$
      let temArr = []
      $("#champion_list li").each((index, item) => {
        let heroName = $(item).find('em').text()
        let imageUrl = $(item).find('img').attr('data-src')
        let detailUrl = $(item).find('a').attr('href')

        temArr.push({
          name,
          imgUrl,
          detailUrl
        })
        Hero.addHero({
          heroName,
          imageUrl,
          detailUrl
        }, (result) => {
          console.log(result)
        })
      })

      for (let i = 0; i < temArr.length; i++) {
        cImg.queue({
          uri: temArr[i].imgUrl,
          filename: './img/' + temArr[i].name + '.png'
        })
        c2.queue(temArr[i].detailUrl)
      }

    }
    done()
  }
})

let cImg = new Crawler({
  encoding: null,
  jQuery: false, // set false to suppress warning message.
  rateLimit: 1000,
  callback: function (err, res, done) {
    if (err) {
      console.error(err.stack);
    } else {
      fs.createWriteStream(res.options.filename).write(res.body);
    }
    done()
  }
})

let c2 = new Crawler({
  maxConnections: 10,
  rateLimit: 1000,
  callback(error, res, done) {
    if (error) {
      console.log(error)
    } else {
      let $ = res.$

      let heroName = $('.hero-intro .hero-name').text()
      let heroTitle = $('.hero-intro .hero-title').text()

      let skins = []
      $('.hero-skin__list li').each((index, item) => {
        let skin = $(item).find('img').attr('src')
        skins.push(skin)
      })

      for (let i = 0; i < skins.length; i++) {
        cImg.queue({
          uri: skins[i],
          filename: './skin/' + heroName + i + '.png'
        })
      }

    }
    done()
  }
})

c1.queue(url)