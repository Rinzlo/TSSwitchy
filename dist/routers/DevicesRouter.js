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
const devicesController = __importStar(require("../controllers/DevicesController"));
// Create a new router to handle /devices routes
const devicesRouter = express_1.Router();
// Ensure that POST, PUT, and PATCH methods only accept Content-Type: application/json bodies
devicesRouter.use((req, res, next) => {
    if (['POST', 'PUT', 'PATCH'].indexOf(req.method) !== -1 &&
        !req.is('json')) {
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
exports.default = devicesRouter;
//# sourceMappingURL=DevicesRouter.js.map