"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addon_actions_1 = require("@storybook/addon-actions");
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_native_1 = require("@storybook/react-native");
const react_1 = __importDefault(require("react"));
const react_native_2 = require("react-native");
const _1 = __importDefault(require("."));
(0, react_native_1.storiesOf)("Button", module)
    .add("with text", () => (react_1.default.createElement(_1.default, { onPress: (0, addon_actions_1.action)("clicked-text") },
    react_1.default.createElement(react_native_2.Text, null, (0, addon_knobs_1.text)("Button text", "Hello Button")))))
    .add("with some emoji", () => (react_1.default.createElement(_1.default, { onPress: (0, addon_actions_1.action)("clicked-emoji") },
    react_1.default.createElement(react_native_2.Text, null, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF yeah so many emoijs"))));
