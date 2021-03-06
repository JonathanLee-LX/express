var express = require('express')
var fortune = require('./lib/fortuneCookies.js')

var app = express()

var handlebars = require('express3-handlebars').create({ defaultLayout: 'main' })


app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.set('port', process.env.PORT || 3000)

app.get('/', function (req, res) {
  res.render('home')
})

app.get('/about', function (req, res) {
  var randomFortune = fortune.getFortune()
  res.type('text/html')
  res.render('about', {fortune : randomFortune})
})

app.use(express.static(__dirname + '/public'))


app.use(function (req, res, next) {
  res.status(404)
  res.render('404')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500)
  res.render('500')
})

app.listen(app.get('port'), function () {
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-c to terminate')
})
