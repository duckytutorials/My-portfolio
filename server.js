const express = require('express')
const app = express()
const { Client } = require('nova-log.js')
const log = new Client({ logPath: "./logs", color: true })
const port = 3000



// Render Html File
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/pages/index.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname+'/pages/contact.html');
});

app.get('/style.css', (req, res) => {
  res.sendfile(__dirname+"/pages/style.css")
})

app.listen(port, () => {
log.debug('Server online')
})