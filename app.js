var dotenv        = require('dotenv').config(),
    express       = require('express'),
    morgan        = require('morgan'),
    path          = require('path'),
    mongoose      = require('mongoose'),
    bodyParser    = require('body-parser');

// Defining new Express app
var app = express();

app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'client/public/views'));


var db = process.env.MONGODB_URI || 'mongodb://localhost/waitlist_app';
mongoose.connect(db);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('client/public'));

// Routing
var indexRouter = require('./server/routes/index.js');
var partiesRouter = require('./server/routes/api/parties.js');
app.use('/', indexRouter);
app.use('/api/parties', partiesRouter);

// Setting the port number / Heroku
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("This app is live! On 8080 beep boop boop.");
});
