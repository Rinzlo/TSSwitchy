// src/routers/MoviesRouter.ts

import { Router } from 'express';
import * as moviesController from '../controllers/MoviesController';

// Create a new router to handle /movies routes
const moviesRouter = Router();

// Ensure that POST, PUT, and PATCH methods only accept Content-Type: application/json bodies
moviesRouter.use((req, res, next) => {
    if (
        ['POST', 'PUT', 'PATCH'].indexOf(req.method) !== -1 &&
        !req.is('json')
    ) {
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

export default moviesRouter;