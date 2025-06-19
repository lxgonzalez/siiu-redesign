import { Colors } from "@/constants/Colors";
import { Information } from "@/constants/informacion";
import { FontAwesome } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.perfil}>
      <Image style={styles.perfilImage} source={Information.photo_url} />
      <Text style={styles.h1}>{Information.name}</Text>
      <Text style={styles.h2}>{Information.carrera}</Text>
      <View style={styles.medallas}>
        {Information.medallas.map((medalla, index) => (
          <View key={index} style={styles.medalla}>
            <FontAwesome
              name={(medalla.icono as any) || "star"}
              color={Colors.tertiary}
              size={60}
            />
            <Text style={styles.medallaText}>{medalla.nombre}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  perfil: {
    position: "absolute",
    top: "25%",
    left: "2%",
    right: "2%",
    borderRadius: 16,
    backgroundColor: Colors.secondary_100,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    elevation: 5,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  perfilImage: {
    position: "relative",
    top: "-25%",
    width: 128,
    height: 128,
    borderRadius: 1000,
    borderWidth: 3,
    borderColor: Colors.primary,
  },
  h1: {
    top: "-20%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 10,
  },
  h2: {
    top: "-20%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "200",
  },
  medallas: {
    top: "-10%",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
  },
  medalla: {
    alignItems: "center",
    gap: 10,
    width: 100,
  },
  medallaText: {
    textAlign: "center",
    color: Colors.tertiary,
    fontWeight: 600,
  },
});
