import React, { useState} from 'react'
import { StyleSheet, TouchableWithoutFeedback,Button,Switch } from 'react-native'
// import Slider from '@react-native-community/slider';
// import { FontAwesome } from '@expo/vector-icons';
import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
// import mocks from '../settings';


function Door()  {
 
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchValue(value);
    
  };

  
    return (
      <Block flex={1} style={styles.settings}>
        <Block flex={0.5} row>
          
            
            <Block flex={1.2} row style={{ alignItems: 'flex-end', }}>
            <Block flex={0.5} row>
        <Text style={{ fontSize: 30}}>{switchValue ? 'Door is opened' : 'Door is closed'}</Text>
        
        <Switch
          
          onValueChange={toggleSwitch}
          value={switchValue}
          style={styles.switch}
        
        />
          </Block>
           
            
          </Block>
          
        </Block>
   
            
          </Block>
      
    )
  }


export default Door;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  switch: {
    margin: 30,
    transform: [{ scaleX:2 }, { scaleY: 2 }]
   
  }
})
