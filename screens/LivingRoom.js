import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { LineChart, Path } from "react-native-svg-charts";
import * as shape from "d3-shape";
import Light from "./Lights";
import * as theme from "../theme";
import { Block, Text } from "../components";
import mocks from "../settings";
import Wifi from "./Wifi";
import Electricity from "./Electricty";
import { useNavigation } from "@react-navigation/native";
import settings from "../settings";
import Dashboard from "./Dashboard";
import { auth } from "./firebase";
// import { auth } from "./firebase";
 function LivingRoom ()  {
  // static navigationOptions = {
  //   headerShown: false
  // };
  // render() {
    
    // const { navigation, settings } = {...props};
    const navigation=useNavigation();
    const LightIcon = settings["light"].icon;
    const ACIcon = settings["ac"].icon;
    const TempIcon = settings["temperature"].icon;
    const FanIcon = settings["fan"].icon;
    const WiFiIcon = settings["wi-fi"].icon;
    const ElectricityIcon = settings["electricity"].icon;

    return (
      <Block style={styles.dashboard}>
        <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
          <Text welcome>Hello</Text>
          <Text name>{auth.currentUser?.email}</Text>
        </Block>

        <Block row style={{ paddingVertical: 10 }}>
          <Block flex={1.5} row style={{ alignItems: "flex-end" }}>
          <Text style={{ fontSize: 50}}>Living Room</Text>
          </Block>
          {/* <Block flex column>
            <Text caption>Humidity</Text>
            <LineChart
              yMax={100}
              yMin={0}
              data={[0, 20, 25, 15, 20, 55, 60]}
              style={{ flex: 0.8 }}
              curve={shape.curveNatural}
              svg={{ stroke: theme.colors.accent, strokeWidth: 3 }}
            />
          </Block> */}
        </Block>

        <ScrollView
          contentContainerStyle={styles.buttons}
          showsVerticalScrollIndicator={false}
        >
          <Block column space="between">
            <Block
              row
              space="around"
              style={{ marginVertical: theme.sizes.base }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>navigation.navigate("Light")
                }
              >
                <Block center middle style={styles.button}>
                  <LightIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {settings["light"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Ac")}
              >
                <Block center middle style={styles.button}>
                  <ACIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {settings["ac"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block
              row
              space="around"
              style={{ marginVertical: theme.sizes.base }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Settings")}
              >
                <Block center middle style={styles.button}>
                  <TempIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {settings["temperature"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>navigation.navigate("Fan")}
              >
                <Block center middle style={styles.button}>
                  <FanIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {settings["fan"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block
              row
              space="around"
              style={{ marginVertical: theme.sizes.base }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Wifi")
                }
              >
                <Block center middle style={styles.button}>
                  <WiFiIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {settings["wi-fi"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Electricity")
                }
              >
                <Block center middle style={styles.button}>
                  <ElectricityIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {settings["electricity"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
// }

Dashboard.defaultProps = {
  settings: mocks
};

export default LivingRoom;

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: theme.sizes.base * 2,
    marginBottom: -theme.sizes.base * 6
  },
  buttons: {
    flex: 1,
    marginBottom: -theme.sizes.base * 6
  },
  button: {
    backgroundColor: theme.colors.button,
    width: 151,
    height: 151,
    borderRadius: 151 / 2
  }
});
