"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Create movie schema
const MovieSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: Date,
    genre: String,
    price: Number
});
// Create Movie model
const Movie = mongoose_1.model('Movie', MovieSchema);
exports.default = Movie;
//# sourceMappingURL=Movie.js.map