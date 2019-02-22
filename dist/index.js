"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MoviesRouter_1 = __importDefault(require("./routers/MoviesRouter"));
const path = __importStar(require("path"));
const mongoose_1 = require("mongoose");
const dotenv = __importStar(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
dotenv.config();
// Connect to database
const mongoUrl = 'mongodb://127.0.0.1:27017/moviesapp';
mongoose_1.connect(process.env.MONGODB_URL, 
// Make sure to include these settings:
{ useNewUrlParser: true, dbName: 'movies' }).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(`MongoDB connection error - could not connect to ${process.env.MONGODB_URL}`);
    console.error(err);
});
// Creates a new Express app instance
const app = express_1.default();
// Sets up the view engine
app.set('views', path.join(__dirname, '/views/'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// Session stuff
app.use(express_session_1.default({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
// Parses JSON in body
app.use(express_1.default.json());
// Handles /movies routes
app.use('/movies', MoviesRouter_1.default);
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
//# sourceMappingURL=index.js.map