
var express = require('express')
var app = express()


app.listen(3000,function(){
        console.log('http://127.0.0.1:3000')
})

app.use( express.json() )
app.use( express.urlencoded({ extended: false }) )

app.get('/', function(req, res){
    res.send('<h1>서버가 시작되었습니다.</h1>')
})

app.get('/test', function(req, res){
    res.json(req.query)
})

app.post('/test2', function(req, res){
    res.json(req.body)
})

// npm init -y
// npm i express
// app.js 만들고
// node app