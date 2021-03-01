import React from 'react';
import { View,Text, } from 'react-native';
import { Navigation } from './src/navigation/navigation'
import { SunProvider } from "./src/context/sunContext";

const App = () => {
  return (
  <SunProvider>
    <Navigation />
  </SunProvider>
  );
};

export default App;
