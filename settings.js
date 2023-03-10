import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5
} from "@expo/vector-icons";
import * as theme from "./theme";
import { Settings } from "react-native";

export default {
  light: {
    name: "Light",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="lightbulb-on-outline"
        {...props}
      />
    )
  },
  ac: {
    name: "AC",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="air-conditioner"
        {...props}
      />
    )
  },
  temperature: {
    name: "Temperature",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="temperature-celsius"
        {...props}
      />
    )
  },
  fan: {
    name: "Fan",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="fan"
        {...props}
      />
    )
  },
  "wi-fi": {
    name: "Wi-Fi",
    icon: ({ size, color, ...props }) => (
      <FontAwesome
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="wifi"
        {...props}
      />
    )
  },
  electricity: {
    name: "Electricity",
    icon: ({ size, color, ...props }) => (
      <MaterialIcons
        size={size || theme.sizes.font}
        color={color || theme.colors.accent}
        name="power"
        {...props}
      />
    )
  },
  door: {
    name: "Door",
    icon: ({ size, color, ...props }) => (
      // <MaterialIcons
      //   size={size || theme.sizes.font}
      //   color={color || theme.colors.accent}
      //   name="door-closed"
      //   {...props}
      // />
      <FontAwesome5 
      
      name="door-closed" 
      size={size || theme.sizes.font}
        color={color || theme.colors.accent}
      
      />
    )
  },
  window: {
    name: "Window",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons name="window-closed-variant" size={size || theme.sizes.font}
      color={color || theme.colors.accent} />
    )
  },
  stove:{
    name: "stove",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons name="stove" size={size || theme.sizes.font}
      color={color || theme.colors.accent} />
    )

  },
  fridge:{
    name: "fridge",
    icon: ({ size, color, ...props }) => (
      <MaterialCommunityIcons name="fridge" size={size || theme.sizes.font}
      color={color || theme.colors.accent} />
    )

  }
};
