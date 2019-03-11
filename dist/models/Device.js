"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Create device schema
const DeviceSchema = new mongoose_1.Schema({
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
const Device = mongoose_1.model("Device", DeviceSchema);
exports.default = Device;
//# sourceMappingURL=Device.js.map