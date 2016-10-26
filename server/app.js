//initiate
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local');
var mongoose = require('mongoose');

//routes
var index = require('./routes/index.js')

//mongo stuff
var mongoURI = process.env.MONGODB_URI ||
  process.env.MONGOHQ_URL ||
  "mongodb://localhost/dataFitDb";
var mongoDB = mongoose.connect(mongoURI).connection;

  //mongo setup things
  mongoDB.on('error', function(err){
      console.log('Mongo is f**king up,  connection: ', err);
  });
  mongoDB.once('open', function(err){
        if(!err) {console.log('Mongo connection open');}
        else if(err) {console.log('Got in but Connection is f**ked upt, connection: ', err);}
    });

// Set port
app.set('port', (process.env.PORT) || 1313);

//some middleware

app.use(session({
  saveUninitialized: true,
    secret: 'secret',
    key: 'user',
    resave: true,
    s: false,
    cookie: {maxAge: null, secure: true}
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


                              app.use(passport.initialize());
                              app.use(passport.session());

                              // PASSPORT SESSION
                              passport.serializeUser(function(user, done){
                                  done(null, user.id);
                              });
                              passport.deserializeUser(function(id, done){
                                  Admin.findById(id, function(err, user){
                                      if(err) done(err);
                                      done(null, user);
                                  });
                              });
                              passport.use('local', new localStrategy({
                                  passReqToCallback: true,
                                  usernameField: 'username'
                                  },
                                  function(req, username, password, done){
                                      Admin.findOne({username: username}, function(err, user){
                                          if(err) throw err;
                                          if(!user){
                                              return done(null, false);
                                          }
                                          user.comparePassword(password, function(err, isMatch){
                                              if(err) throw err;
                                              if(isMatch){
                                                  return done(null, user);
                                              }else{
                                                  done(null, false);
                                              }
                                          });
                                      });
                                  }
                              ));

app.use('/',index);
app.listen(app.get('port'),function(){
  console.log('We can hear on port #', app.get('port'))
})

module.export = app;
