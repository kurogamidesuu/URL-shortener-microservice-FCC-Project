require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const dns = require('dns');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

const urls = [];
let counter = 0;

app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/shorturl', function(req, res) {
  let url = req.body.url;
  
  let hostname;
  try {
    const parsedUrl = new URL(url);
    hostname = parsedUrl.hostname;
  } catch(e) {
    return res.json({error: 'invalid url'});
  }

  
  dns.lookup(hostname, function(err) {
    if (err) return res.json({error: 'invalid url'});

    let exists = urls.find(elem => elem.url === url);
    if (!exists) {
      urls.push({url: url, short: counter++});
    }

    const urlObject = urls.find(elem => elem.url === url);

    res.json(
      {
        original_url: urlObject.url,
        short_url: urlObject.short
      }
    );
  });
});

app.get('/api/shorturl/:url?', function(req, res) {
  const url = req.params.url;
  const urlObject = urls.find(elem => elem.short === Number(url));
  if(urlObject) {
    const original_url = urlObject.url;
    res.redirect(original_url);
  } else {
    res.json({error: "shorturl doesn't exist"})
  }
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
