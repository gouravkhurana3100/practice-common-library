import { storiesOf } from "@storybook/react-native";
import React from "react";

import ViewBox from "./index";

storiesOf("Hello world with nativebase", module).add("with text", () => (
  <ViewBox></ViewBox>
));
