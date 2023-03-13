"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Button = ({ children, onPress }) => (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.container, onPress: onPress },
    react_1.default.createElement(react_native_1.Text, { style: styles.title }, children)));
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
});
exports.default = Button;
