const express = require('express')
const app = express()

const host = '127.0.0.1'
const port = 7000

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static(__dirname + "/style"));

app.get('/', (req, res) => {
  res.render('main', { title: 'bro' })
})
app.get('/reg', (req, res) => {
    res.render('reg', { title: 'reg' })
  })
app.get('/enter', (req, res) => {
    res.render('enter', { title: 'enter' })
  })
app.get('/promo', (req, res) => {
  res.render('promo', { title: 'promo' })
  })  
app.get('/onepiece', (req, res) => {
  res.render('onepiece', { title: 'onepiece' })
  }) 
app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})