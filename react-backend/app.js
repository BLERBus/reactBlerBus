var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var getUsers = require('./routes/getUsers');
var login = require('./routes/login');
var getLinhas = require('./routes/getLinhas');
var getStatus = require('./routes/getStatus');
var updateTime = require('./routes/updateTime');
var forum = require('./routes/forum');
var resposta = require('./routes/resposta');
var cadastro = require('./routes/cadastro');
var responder = require('./routes/responder');

var app = express();

var connection  = require('express-myconnection'),
mysql = require('mysql');

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// tem que mudar para os seus dados
app.use(
  connection(mysql,{
      host     : 'localhost',
      user     : 'root',
      password : 'Katchin98',
      database : 'blerbus',
      debug    : false //set true if you wanna see debug logger
  },'request')
  
  );
  

app.use('/', index);
app.use('/getUsers', getUsers);
app.use('/login', login);
app.use('/getLinhas', getLinhas);
app.use('/getStatus', getStatus);
app.use('/updateTime', updateTime);
app.use('/forum', forum);
app.use('/resposta', resposta);
app.use('/cadastro', cadastro);
app.use('/responder', responder);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
