// Reference the Request and Response types from express
import {Request, Response} from 'express';
import Device from '../models/Device';
import { NextFunction } from 'connect';
import * as rm from 'typed-rest-client/RestClient';
import { number, string } from 'prop-types';

interface Devices {
    devices: {
        id: [Object]
    };


    result: {
        devices: string,
        device: {
            id: [Object]
        }
    }
}

export async function index(req: Request, res: Response) {
    runSample();

    // res.render('devices/index', { title: 'Devices' });
}

async function runSample() {
    let rest: rm.RestClient = new rm.RestClient('rest-samples',
    process.env.IOD_URL);

    let res: rm.IRestResponse<Devices> = await rest.get<Devices>('/api/query');

    console.log(res.result.devices);
    // console.log(res.result.devices['dummy*light1']);
}

export function getWelcome(req: Request, res: Response) {
    const { id } = req.params; // the 'id' param that was just added
    const { name } =req.query;

    res.send(`Hello ${name}, ID is: ${id}`);
}

export async function getDevice(req: Request, res: Response, next: NextFunction){
    try {
        const { id } = req.params;

        const device = await Device.findById(id).exec();

        if(!device){
            return res.status(404).send('Device not found');
        }

        return res.json(device);
    } catch (e) {
        next(e);
    }
}

export async function postDevice(req: Request, res: Response){
    try {
        // Create new device, using the JSON data from the request body
        const newDevice = new Device(req.body);

        // Persist the device to the database
        const savedDevice = await newDevice.save();

        // Respond with the persisted data
        return res.json(savedDevice);
    } catch(ex) {
        // Catch any validation errors
        return res.status(400).send(ex.message);
    }
}
