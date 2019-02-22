"use strict";
// src/routers/MoviesRouter.ts
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moviesController = __importStar(require("../controllers/MoviesController"));
// Create a new router to handle /movies routes
const moviesRouter = express_1.Router();
// Ensure that POST, PUT, and PATCH methods only accept Content-Type: application/json bodies
moviesRouter.use((req, res, next) => {
    if (['POST', 'PUT', 'PATCH'].indexOf(req.method) !== -1 &&
        !req.is('json')) {
        return res.status(415).send('Content-Type must be application/json');
    }
    return next();
});
// GET /movies/
moviesRouter.get('/', moviesController.index);
// GET /movies/welcome
// Add the /:id route parameter
// This will add the 'id' property to req.params
moviesRouter.get('/welcome/:id', moviesController.getWelcome);
// GET /movies/:id
moviesRouter.get('/:id', moviesController.getMovie);
// POST /movies/new
moviesRouter.post('/new', moviesController.postMovie);
exports.default = moviesRouter;
//# sourceMappingURL=MoviesRouter.js.map