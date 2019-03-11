import { Schema, model } from "mongoose";
import { number } from "prop-types";

// Create device schema
const DeviceSchema = new Schema({
    dummylight1: {
        caps: {
            bri: { max: Number, min: Number, now: Number },
            col: { b: Number, g: Number, r: Number },
            power: { now: Boolean }
        },
        name: String
    },
    dummylight2: {
    caps: {
        bri: { max: Number, min: Number, now: Number },
        col: { b: Number, g: Number, r: Number },
        power: { now: Boolean }
    },
        name: String
    }
});
// Create Device model
const Device = model("Device", DeviceSchema);

export default Device;
