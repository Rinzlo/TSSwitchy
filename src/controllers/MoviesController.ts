// Reference the Request and Response types from express
import {Request, Response} from 'express';
import Movie from '../models/Movie';
import { NextFunction } from 'connect';

export function index(req: Request, res: Response) {
    res.render('movies/index', { title: 'Movies' });
}

export function getWelcome(req: Request, res: Response) {
    const { id } = req.params; // the 'id' param that was just added
    const { name } =req.query;

    res.send(`Hello ${name}, ID is: ${id}`);
}

export async function getMovie(req: Request, res: Response, next: NextFunction){
    try {
        const { id } = req.params;

        const movie = await Movie.findById(id).exec();

        if(!movie){
            return res.status(404).send('Movie not found');
        }

        return res.json(movie);
    } catch (e) {
        next(e);
    }
}

export async function postMovie(req: Request, res: Response){
    try {
        // Create new movie, using the JSON data from the request body
        const newMovie = new Movie(req.body);

        // Persist the movie to the database
        const savedMovie = await newMovie.save();

        // Respond with the persisted data
        return res.json(savedMovie);
    } catch(ex) {
        // Catch any validation errors
        return res.status(400).send(ex.message);
    }
}
