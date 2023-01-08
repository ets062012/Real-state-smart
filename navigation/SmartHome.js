import React from "react";
// import { createStackNavigator } from "react-navigation-stack";
//import { createStackNavigator } from "react-navigation-stack";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../screens/Dashboard";
import Settings from "../screens/Settings";
import Light from "../screens/Lights";
import Fan from "../screens/Fan";
 import Wifi from "../screens/Wifi";
 import Electricity from "../screens/Electricty";
import Ac from "../screens/Ac";
import LoginScreen from "../screens/Login";
import * as theme from "../theme";
import { StyleSheet, TouchableWithoutFeedback,Button,Slider,Switch,Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import LivingRoom from "../screens/LivingRoom";
import BedRoom from "../screens/BedRoom";
import Door from "../screens/Door";
import Window from "../screens/Window";
import Kitchen from "../screens/Dashboard";
import Stove from "../screens/Stove";
import Fridge from "../screens/Fridge";
// import { NavigationContainer } from "@react-navigation/native";
// export default createStackNavigator(
//   {
//     Dashboard,
//     Settings,
//     Light,
//     Fan,
//     Wifi,
//     Electricity,
//     Ac,
//     LoginScreen,
//   },
//   {
//     initialRouteName: "Dashboard"
//   }
// );
// const linking={
//   config:{
//   screens:{
//   SmartHome:{
//       initialRouteName:'Dashboard',
//   screens:{
// Dashboard:'/Dasboard',
//   // HelloScreen2:'/hello/screen2'
//   },
//   },
  
  
//   },
//   },
  
  
  
//   }
  const Drawer=createDrawerNavigator();
 function NavigationContents(){

return(
  
<Drawer.Navigator
screenOptions={{headerShown:true}}
>
         {/* <Drawer.Screen name='SmartHome' component={SmartHome}/> */}
        
        <Drawer.Screen name='LivngRoom' component={LivingRoom}/>
       <Drawer.Screen name='BedRoom' component={BedRoom}/>
        <Drawer.Screen   name="Kitchen" component={Kitchen}/>

    </Drawer.Navigator>

)


}
const HomeStack=createNativeStackNavigator();
 export default SmartHome=()=>{
return(
<HomeStack.Navigator screenOptions={{

headerLeft: ({ onPress }) => (
  <TouchableWithoutFeedback onPress={() => onPress()}>
    <FontAwesome size={theme.sizes.font * 1.5} color={theme.colors.black} />
  </TouchableWithoutFeedback>
),
headerLeftContainerStyle: {
  paddingLeft: theme.sizes.base * 2
},
headerStyle: {
  borderBottomColor: 'transparent',
}

}}>


<HomeStack.Screen   name="Login" component={LoginScreen}   options={{title:"Login"}}/>
<HomeStack.Screen   name="Drawer" component={NavigationContents}   options={{title:"SmartHome"}}/>
<HomeStack.Screen   name="Stove" component={Stove}   options={{title:"Stove"}}/>

<HomeStack.Screen   name="Fridge" component={Fridge}   options={{title:"Fridge"}}/>
<HomeStack.Screen   name="Light" component={Light}   options={{title:"Light"}}/>
<HomeStack.Screen   name="Fan" component={Fan}   options={{title:"Fan"}}/>
<HomeStack.Screen   name="Ac" component={Ac}   options={{title:"Ac"}}/>
<HomeStack.Screen   name="Wifi" component={Wifi}   options={{title:"Wifi"}}/>
<HomeStack.Screen   name="Electricity" component={Electricity}   options={{title:"Electricity"}}/>
<HomeStack.Screen   name="Settings" component={Settings}   options={{title:"Settings"}}/>
<HomeStack.Screen   name="Door" component={Door}   options={{title:"Door"}}/>
<HomeStack.Screen   name="Window" component={Window}   options={{title:"Window"}}/>
</HomeStack.Navigator>


)


}
// export default SmartHome;



// function BedRoom(){
//     return <Text style={{ fontSize: 50}}>Bed Room</Text>
// }



// export default function Navigation(){
//   return(
//   <NavigationContainer linking={linking}>
  
//   <NavigationContents/>
  
//   </NavigationContainer>
  
  
  
//   )
// }