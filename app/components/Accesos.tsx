import { AccesosList } from "@/constants/accesos";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

function TabButton({ label, isActive, onPress }: TabButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.tabButton,
        isActive && { borderColor: Colors.tertiary },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.tabButtonText,
          isActive && { color: Colors.tertiary },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

interface CardProps {
  nombre: string;
  photo_url: any;
}

function Card({ nombre, photo_url }: CardProps) {
  return (
    <View style={styles.cardShadowWrapper}>
      {typeof photo_url === 'string' ? (
        <Image src={photo_url} style={styles.cardImage} />
      ) : (
        <Image source={photo_url} resizeMode="cover" style={styles.cardImage} />
      )}
      <Text style={styles.cardText}>{nombre}</Text>
    </View>
  );
}

export default function Accesos() {
  const [activeButton, setActiveButton] = useState<'accesos' | 'noticias'>("accesos");

  const data = activeButton === "accesos"
    ? AccesosList.accesos_directos
    : AccesosList.noticias_semanales;

  return (
    <View style={styles.accesosSection}>
      <View style={styles.tabBar}>
        <TabButton
          label="Accesos Directos"
          isActive={activeButton === "accesos"}
          onPress={() => setActiveButton("accesos")}
        />
        <TabButton
          label="Noticias Semanales"
          isActive={activeButton === "noticias"}
          onPress={() => setActiveButton("noticias")}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={styles.cardsRow}>
          {data.map((item, index) => (
            <Card key={index} nombre={item.nombre} photo_url={item.photo_url} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  accesosSection: {
    flex: 0.35,
  },
  tabBar: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 20,
  },
  tabButton: {
    padding: 12,
    borderBottomWidth: 2,
    borderColor: Colors.secondary,
  },
  tabButtonText: {
    color: Colors.secondary,
    fontWeight: "600",
  },
  cardsRow: {
    marginTop: 16,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
  },
  cardBlur: {
    borderRadius: 16,
    marginRight: 0,
  },
  cardShadowWrapper: {
    borderRadius: 16,
    width: 256,
    height: 164,
    backgroundColor: Colors.secondary_100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },

  cardImage: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    height: 120,
  },
  cardText: {
    padding: 10,
    fontSize: 18,
    fontWeight: "300",
    color: Colors.secondary,
  },
});
