const express = require('express')
const app = express()
const banco = require('./banco/Banco')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/maquina', function (req, res) {
  banco.salvarStatus(req.body)
  res.end();
})
app.get('', (req,res)=>{
  res.end("Aplication Up!");
})
app.get('/status/:id', function (req, res) {
  banco.pegarStatus(req.params).then(x=>{
    res.end(x);
  })
})

app.listen(process.env.PORT)
console.log("Main server runing on Port:" + 8080);