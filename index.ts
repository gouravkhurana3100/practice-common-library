// main index.js

import { NativeModules } from 'react-native';
export { default as Button } from './src/ui-components/button';
const { ArCommon } = NativeModules;

export default ArCommon;
