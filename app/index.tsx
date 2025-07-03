import { Colors } from "@/constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";
import Accesos from "./components/Accesos";
import Perfil from "./components/Perfil";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/fondo-logo.png")}
        resizeMode="cover"
        style={styles.image_sello}
      />
      <Ionicons
        name="id-card"
        size={50}
        color={Colors.secondary_100}
        style={{ position: "absolute", top: 60, left: 20, zIndex: 2 }}
        onPress={() => router.push("/carnet")}
      />
      <ImageBackground
        source={require("@/assets/images/fondo-uce.webp")}
        resizeMode="cover"
        style={styles.image_uce}
      />
      <Perfil />
      <View style={styles.relleno}></View>
      <Accesos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary_100,
  },
  image_sello: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  image_uce: {
    flex: 0.45,
    width: "100%",
    zIndex: 1,
  },
  relleno: {
    flex: 0.2,
  },
  accesos: {
    flex: 0.5,
  },
});