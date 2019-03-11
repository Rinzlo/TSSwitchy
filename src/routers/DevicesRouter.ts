// src/routers/MoviesRouter.ts

import { Router } from 'express';
import * as devicesController from '../controllers/DevicesController';

// Create a new router to handle /devices routes
const devicesRouter = Router();

// Ensure that POST, PUT, and PATCH methods only accept Content-Type: application/json bodies
devicesRouter.use((req, res, next) => {
    if (
        ['POST', 'PUT', 'PATCH'].indexOf(req.method) !== -1 &&
        !req.is('json')
    ) {
        return res.status(415).send('Content-Type must be application/json');
    }

    return next();
});

// GET /devices/
devicesRouter.get('/', devicesController.index);

// GET /devices/welcome
// Add the /:id route parameter
// This will add the 'id' property to req.params
devicesRouter.get('/welcome/:id', devicesController.getWelcome);

// GET /devices/:id
devicesRouter.get('/:id', devicesController.getDevice);

// POST /devices/new
devicesRouter.post('/new', devicesController.postDevice);

export default devicesRouter;