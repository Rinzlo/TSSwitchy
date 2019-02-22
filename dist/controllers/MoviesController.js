"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("../models/Movie"));
function index(req, res) {
    res.render('movies/index', { title: 'Movies' });
}
exports.index = index;
function getWelcome(req, res) {
    const { id } = req.params; // the 'id' param that was just added
    const { name } = req.query;
    res.send(`Hello ${name}, ID is: ${id}`);
}
exports.getWelcome = getWelcome;
function getMovie(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const movie = yield Movie_1.default.findById(id).exec();
            if (!movie) {
                return res.status(404).send('Movie not found');
            }
            return res.json(movie);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getMovie = getMovie;
function postMovie(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create new movie, using the JSON data from the request body
            const newMovie = new Movie_1.default(req.body);
            // Persist the movie to the database
            const savedMovie = yield newMovie.save();
            // Respond with the persisted data
            return res.json(savedMovie);
        }
        catch (ex) {
            // Catch any validation errors
            return res.status(400).send(ex.message);
        }
    });
}
exports.postMovie = postMovie;
//# sourceMappingURL=MoviesController.js.map