# crawlerHero-mongoDB
> 抓取LOL英雄数据并入库到mongodb, 开启API服务器
## 安装
``` shell
$ npm i
```

## 开启mongodb数据库服务
``` cmd
$ mongod
```


## 抓取数据
``` cmd
$ node crawler.js
```
## 开启服务器
``` cmd 
$ node app.js
```
## API
``` text
1. 查询所有英雄
  url: '/getAllHero'
  参数: 无
  返回格式: JSON
  
2. 根据名字模糊搜索英雄信息
  url: '/getHeroByName'
  参数: heroName(String)
  返回格式: JSON
  
3. 根据id删除记录
  url: '/deleteById'
  参数: id
  返回格式: JSON
  
4. 添加英雄
  url: '/addHero'
  参数: heroName(String), imageUrl(String)
  返回格式: JSON
  
5. 根据id修改英雄信息
  url: '/updateHeroById'
  参数: heroName(String), imageUrl(String), id
  返回格式: String
```
