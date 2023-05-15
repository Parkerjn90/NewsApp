const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'client/news/build')));

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/news/build/index.html'));
});

app.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3df0162e66714d528e79e3935312c7d7', (req, res) => {
  res.send({ express: 'hello from server.js'});
});