const express = require('express')
const User = require('./schema/user')
const Hero = require('./controller/heroController')
const router = express.Router()

router.get('/', (req, res) => {
	User.find((err, result) => {
		res.json(result)
	})
})

// 查询所有的英雄
router.get('/getAllHero', (req, res) => {
	Hero.getAllHero((data) => {
		res.json(data)
	})
})

// 根据名字模糊搜索英雄信息
router.get('/getHeroByName', (req, res) => {
	let query = new RegExp(req.query.heroName)
	Hero.getHeroByName(query, (data) => {
		res.json(data)
	})
})

// 根据id删除记录
router.get('/deleteById', (req, res) => {
	Hero.deleteById(req.query.id, (data) => {
		res.json(data)
	})
})

// 添加英雄
router.post('/addHero', (req, res) => {
	let heroName = req.body.heroName
	let imageUrl = req.body.imageUrl
	Hero.addHero(heroName, imageUrl, (data) => {
		res.json(data)
	})
})

// 修改英雄信息
router.post('/updateHeroById', (req, res) => {
	let id = req.body.id
	let heroName = req.body.heroName
	let imageUrl = req.body.imageUrl
	Hero.updateHeroById({
		id,
		heroName,
		imageUrl
	}, (data) => {
		res.send(data)
	})
})

module.exports = router