import express from 'express';
import moviesRouter from './routers/MoviesRouter';
import devicesRouter from './routers/DevicesRouter';
import * as path from 'path';
import { connect } from 'mongoose';
import * as dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';

dotenv.config();

// Connect to database
const mongoUrl = 'mongodb://127.0.0.1:27017/moviesapp';
connect (
    process.env.MONGODB_URL,
    // Make sure to include these settings:
    { useNewUrlParser: true, dbName: 'movies' }
).then( () => {
    console.log('Connected to MongoDB');
}).catch( err => {
    console.log(`MongoDB connection error - could not connect to ${process.env.MONGODB_URL}`);
    console.error(err);
});

// Creates a new Express app instance
const app = express();

// Sets up the view engine
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Session stuff
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Parses JSON in body
app.use(express.json());

// Handles /movies routes
app.use('/movies', moviesRouter);

app.use('/devices', devicesRouter);

// Configures the http://localhost:5000/ route to send a text response
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const port = process.env.PORT || 5000;

// Starts the app on the configured port, then calls the callback when
// the app successfully starts.
app.listen(port, () => {
    console.log(`Listening on port ${port}: http://localhost:${port}`);
});