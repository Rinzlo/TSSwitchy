"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const base_1 = __importDefault(require("../layouts/base"));
class MoviesView extends React.Component {
    render() {
        return (<base_1.default title={this.props.title}>
                <h2>Index</h2>
                <p>Hello from our MoviesView component!</p>
            </base_1.default>);
    }
}
exports.default = MoviesView;
//# sourceMappingURL=index.jsx.map