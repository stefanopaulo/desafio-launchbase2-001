const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'njk');

nunjucks.configure({
    express: server,
    autoescape: false,
    noCache: true,
});

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000);
