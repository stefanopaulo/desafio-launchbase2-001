const express =require('express');
const nunjucks = require('nunjucks');
const data = require('./data');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'njk');

nunjucks.configure('views', {
    express: app,
    autoescape: false,
    noCache: true
});

app.get('/', (req, res) => {
    return res.render('index');
});

app.get('/contents', (req, res) => {
    return res.render('contents', { items: data });
});

app.listen(5000, () => console.log('server is running!'));
