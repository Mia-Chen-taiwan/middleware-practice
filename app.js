const express = require('express')
const app = express()
const port = 3000

///////// Middleware ////////////
app.use((req, res, next) => {
  const time = new Date()
  const request = `${req.method} from ${req.originalUrl}`
  // 伺服器收到請求的時間戳記
  console.time(`${time.toLocaleString()} | ${request} | total time`)

  res.on('finish', () => {
    // 伺服器送出回應的時間
    console.timeEnd(`${time.toLocaleString()} | ${request} | total time`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})