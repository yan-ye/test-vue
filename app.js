const express = require('express')
var app = express();
var ejs = require('ejs');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
app.engine('.htm', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.htm');
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public'), {maxAge: '7 days'}));
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


require('./routes')(app)

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(404).render('404');
});

app.listen(9090, function() {
    console.log('server runing....');
})