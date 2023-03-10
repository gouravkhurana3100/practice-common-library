"use strict";
// main index.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_native_1 = require("react-native");
var button_1 = require("./src/ui-components/button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return __importDefault(button_1).default; } });
const { ArCommon } = react_native_1.NativeModules;
exports.default = ArCommon;
