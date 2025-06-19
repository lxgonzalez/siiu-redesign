import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropdownMenu from "./ui/DropdownMenu";
import SvgSapientia from "./ui/SvgSapientia";

type EntypoIconName =
  | "menu"
  | "home";

interface MenuIconProps {
  name: EntypoIconName;
  color: string;
  text: string;
  textColor?: string;
  onPress?: () => void;
  style?: any;
}

function MenuIcon({ name, color, text, textColor, onPress, style }: MenuIconProps) {
  return (
    <TouchableOpacity
      style={[styles.menu_icon, style]}
      onPress={onPress}
      disabled={!onPress}
    >
      <Entypo name={name} color={color} size={32} />
      <Text style={[styles.menu_text, textColor ? { color: textColor } : null]}>{text}</Text>
    </TouchableOpacity>
  );
}

export default function BottomNavBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [active, setActive] = useState<'home' | 'menu'>('home');

  const handleMenuPress = () => {
    setDropdownVisible(!isDropdownVisible);
    setActive(isDropdownVisible ? 'home' : 'menu');
  };

  const handleHomePress = () => {
    setDropdownVisible(false);
    setActive('home');
  };

  return (
    <>
      <BlurView style={styles.menu} intensity={100} tint="extraLight">
        <MenuIcon
          name="menu"
          color={active === 'menu' ? Colors.primary : Colors.secondary}
          text="Menú"
          textColor={active === 'menu' ? Colors.primary : Colors.secondary}
          onPress={handleMenuPress}
        />
        <View style={styles.menu_sapientia}>
          <SvgSapientia color={Colors.secondary} />
        </View>
        <MenuIcon
          name="home"
          color={active === 'home' ? Colors.primary : Colors.secondary}
          text="Home"
          textColor={active === 'home' ? Colors.primary : Colors.secondary}
          onPress={handleHomePress}
        />
      </BlurView>
      <DropdownMenu isVisible={isDropdownVisible} onClose={handleMenuPress} />
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'rgba(240, 238, 237, 0.9)',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    height: 90,
    elevation: 5,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
  },
  menu_icon: {
    alignItems: "center",
  },
  menu_sapientia: {
    width: 70,
    height: 70,
    marginBottom: 15,
  },
  menu_text: {
    color: Colors.secondary,
  },
});
