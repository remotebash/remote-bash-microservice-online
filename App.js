const express = require('express')
const app = express()
// const banco = require('./banco/Banco')
// const send = require('./Send')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// app.post('/maquina', function (req, res) {
//   banco.salvarStatus(req.body)
//   res.end();
// })
app.get('', function (req,res){
  res.end("olá bb");
})
app.get('/status/:id', function (req, res) {
  // banco.pegarStatus(req.params).then(x=>{
  //   res.end(x);
  // })
  res.end("id: " + req.params.id);
})

app.listen(process.env.PORT)
console.log("Main server runing on Port:" + process.env.PORT);