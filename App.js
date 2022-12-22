import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

import SmartHome from './navigation/SmartHome';
import { NavigationContainer } from '@react-navigation/native';
// import NavigationContents from './navigation/Drawer';
// import NavigationContents from './navigation/SmartHome';

export default function app(){
    return(
      // <GestureHandlerRootView >
    <NavigationContainer>
    
    <SmartHome/>
    
    </NavigationContainer>
    // </GestureHandlerRootView>
    
    
    
    )
  }
  
// export default function App() {
//     return (
//      <SafeAreaProvider>
//         <Navigation/>
//         </SafeAreaProvider>
//     )
//   }