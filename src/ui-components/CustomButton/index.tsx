import { Button, NativeBaseProvider } from "native-base";
import React from "react";

export default function App() {
  return (
    <NativeBaseProvider>
      <Button>Hello world, welcome to dubai</Button>
    </NativeBaseProvider>
  );
}
