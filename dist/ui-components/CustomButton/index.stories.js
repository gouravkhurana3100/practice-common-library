"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@storybook/react-native");
const react_1 = __importDefault(require("react"));
const index_1 = __importDefault(require("./index"));
(0, react_native_1.storiesOf)("Hello world with nativebase", module).add("with text", () => (react_1.default.createElement(index_1.default, null)));
