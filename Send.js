const express = require('express')
const app = express()
const post = require("./Post")

app.get('/enviar', function (req, res) {
  var ola = {
    'id' : '1234456'
  }
  res.send(post.sendPost(ola))
})

app.listen(3000)
console.log("Post server runing on Port:" + 3000);





