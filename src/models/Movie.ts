import { Schema, model } from 'mongoose';

// Create movie schema
const MovieSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    releaseDate: Date,
    genre: String,
    price: Number
});
// Create Movie model
const Movie = model('Movie', MovieSchema);

export default Movie;