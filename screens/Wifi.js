import React, { useState} from 'react'
import { StyleSheet, TouchableWithoutFeedback,Button,Switch } from 'react-native'
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';
import * as theme from '../theme';
import { Block, Text, PanSlider } from '../components';
import mocks from '../settings';


function Wifi()  {
  // static navigationOptions = {
  //   headerLeft: ({ onPress }) => (
  //     <TouchableWithoutFeedback onPress={() => onPress()}>
  //       <FontAwesome size={theme.sizes.font * 1.5} color={theme.colors.black} name="arrow-left" />
  //     </TouchableWithoutFeedback>
  //   ),
  //   headerLeftContainerStyle: {
  //     paddingLeft: theme.sizes.base * 2
  //   },
  //   headerStyle: {
  //     borderBottomColor: 'transparent',
  //   }
  // };

  // const [sliderValue, setSliderValue] = useState(15);
  // handleChange = (value) => {
  //   this.setState({previousState : value});
  // };
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    setSwitchValue(value);
    //state changes according to switch
    //which will result in re-render the text
  };

  // renderController() {
    // return (
    //   <Block flex={1} right style={styles.controller}>
    //     <Block center style={styles.controllerValue}>
    //       <Text color="white">34</Text>
    //     </Block>
    //     <Block flex={0.8} style={[styles.controllerOverlay]} />
    //   </Block>
    // )
  // }

  // render() {
    // const { navigation } = this.props;
    // const name = navigation.getParam('name');
    //const Icon = settings[name].icon;
    // const { value } = state;
    return (
      <Block flex={1} style={styles.settings}>
        <Block flex={0.5} row>
          
            
            <Block flex={1.2} row style={{ alignItems: 'flex-end', }}>
            <Block flex={0.5} row>
        <Text style={{ fontSize: 30}}>{switchValue ? 'Wifi is ON' : 'Wifi is OFF'}</Text>
        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
          </Block>
           
            
          </Block>
          
        </Block>
        {/* <Block flex style={{ marginTop: 100}}>
          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Block row space="between">
              <Text welcome color="black">brightness</Text>
              <Text style={{color: 'black' , marginTop:20}}> {sliderValue}</Text>
            </Block>
            <Slider
          maximumValue={100}
          minimumValue={0}
          minimumTrackTintColor="#307ecc"
          maximumTrackTintColor="#000000"
          step={1}
          value={sliderValue}
          onValueChange={(sliderValue) => setSliderValue(sliderValue)}
        />
          </Block>
          
          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Block row space="between">
              <Text welcome color="black">color</Text>
              <Text welcome color="black">{state.speed}</Text>
            </Block> */}
            
          </Block>
      //   </Block>
      // </Block>
    )
  }
// }

// Settings.defaultProps = {
//   settings: mocks,
// }

export default Wifi;

const styles = StyleSheet.create({
  settings: {
    padding: theme.sizes.base * 2,
  },
  switch: {
    margin: 30,
    transform: [{ scaleX:2 }, { scaleY: 2 }]
   
  }
})
