"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Device_1 = __importDefault(require("../models/Device"));
const rm = __importStar(require("typed-rest-client/RestClient"));
function index(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        runSample();
        // res.render('devices/index', { title: 'Devices' });
    });
}
exports.index = index;
function runSample() {
    return __awaiter(this, void 0, void 0, function* () {
        let rest = new rm.RestClient('rest-samples', process.env.IOD_URL);
        let res = yield rest.get('/api/query');
        console.log(res.result.devices);
        // console.log(res.result.devices['dummy*light1']);
    });
}
function getWelcome(req, res) {
    const { id } = req.params; // the 'id' param that was just added
    const { name } = req.query;
    res.send(`Hello ${name}, ID is: ${id}`);
}
exports.getWelcome = getWelcome;
function getDevice(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const device = yield Device_1.default.findById(id).exec();
            if (!device) {
                return res.status(404).send('Device not found');
            }
            return res.json(device);
        }
        catch (e) {
            next(e);
        }
    });
}
exports.getDevice = getDevice;
function postDevice(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create new device, using the JSON data from the request body
            const newDevice = new Device_1.default(req.body);
            // Persist the device to the database
            const savedDevice = yield newDevice.save();
            // Respond with the persisted data
            return res.json(savedDevice);
        }
        catch (ex) {
            // Catch any validation errors
            return res.status(400).send(ex.message);
        }
    });
}
exports.postDevice = postDevice;
//# sourceMappingURL=DevicesController.js.map