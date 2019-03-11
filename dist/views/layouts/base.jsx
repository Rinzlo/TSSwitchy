"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class BaseLayout extends React.Component {
    render() {
        return (<html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <header>
                        <h1>{this.props.title} - Device App</h1>
                    </header>
                    <main>{this.props.children}</main>
                </body>
            </html>);
    }
}
exports.default = BaseLayout;
//# sourceMappingURL=base.jsx.map