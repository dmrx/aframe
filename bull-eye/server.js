const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  res.setHeader("content-type", "text/html");
  fs.createReadStream("./listener.html").pipe(res);
});

app.get('/song.mp3', (req, res) => {
  res.setHeader("content-type", "audio/mpeg");
  fs.createReadStream("./song.mp3").pipe(res);
});



app.listen(3000);