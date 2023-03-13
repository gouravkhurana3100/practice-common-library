"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_base_1 = require("native-base");
const react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement(native_base_1.NativeBaseProvider, null,
        react_1.default.createElement(native_base_1.Button, null, "Hello world, welcome to dubai")));
}
exports.default = App;
