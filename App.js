import React from 'react';
// import DrawerNavigator from './src/Navigation/DrawerNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/Navigation/stackNavigation';




const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Navigation/>
    </GestureHandlerRootView>
  );
};

export default App;


