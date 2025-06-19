import { Colors } from "@/constants/Colors";
import { MenuList } from "@/constants/Menu";
import { Entypo } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface DropdownMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

interface SectionProps {
  title: string;
  items: { nombre: string; icon: string }[];
  expanded: boolean;
  onToggle: () => void;
}

const iconMap: Record<string, keyof typeof Entypo.glyphMap> = {
  matricula: "address",
  inscripcion: "edit",
  solicitud: "clipboard",
  horario: "calendar",
  logros: "trophy",
  social: "users",
  servicios: "tools",
  huecas: "shop",
  tienda: "shopping-bag",
  parking: "drive",
  apuntes: "text-document",
};

function Section({ title, items, expanded, onToggle }: SectionProps) {
  return (
    <View style={styles.section}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          onToggle();
        }}
      >
        <Entypo
          name={expanded ? "chevron-down" : "chevron-right"}
          size={20}
          color={Colors.primary}
          style={{ marginLeft: 8 }}
        />
        <Text style={[styles.sectionTitle, { color: Colors.primary }]}>
          {title}
        </Text>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.subMenu}>
          {items.map((item, idx) => (
            <View key={item.nombre + idx} style={styles.menuItemRow}>
              <Entypo
                name={iconMap[item.icon] || "dot-single"}
                size={22}
                color={Colors.secondary}
                style={{ marginRight: 12 }}
              />
              <Text style={styles.menuItemText}>{item.nombre}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isVisible, onClose }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isVisible) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.overlay}
      onPress={onClose}
      activeOpacity={1}
    >
      <View style={styles.bottomContainerWrapper} pointerEvents="box-none">
        <BlurView
          style={styles.dropdownContainer}
          intensity={60}
          tint="extraLight"
        >
          <Section
            title="Procesos académicos"
            items={MenuList.procesos_academicos}
            expanded={expandedSection === "procesos_academicos"}
            onToggle={() =>
              setExpandedSection(
                expandedSection === "procesos_academicos"
                  ? null
                  : "procesos_academicos"
              )
            }
          />
          <Section
            title="Reportes de Grado"
            items={MenuList.reportes_grado}
            expanded={expandedSection === "reportes_grado"}
            onToggle={() =>
              setExpandedSection(
                expandedSection === "reportes_grado"
                  ? null
                  : "reportes_grado"
              )
            }
          />
          <Section
            title="Servicios académicos"
            items={MenuList.servicios_academicos}
            expanded={expandedSection === "servicios_academicos"}
            onToggle={() =>
              setExpandedSection(
                expandedSection === "servicios_academicos"
                  ? null
                  : "servicios_academicos"
              )
            }
          />
        </BlurView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 90,
    justifyContent: "flex-end",
    zIndex: 999,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  bottomContainerWrapper: {
    width: "100%",
    margin: 8,
  },
  dropdownContainer: {
    backgroundColor: "rgba(240, 238, 237, 0.7)",
    width: "70%",
    borderRadius: 18,
    paddingVertical: 6,
    elevation: 10,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: "hidden",
  },
  section: {
    borderRadius: 12,
    overflow: "hidden",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 17,
    color: Colors.primary,
    flex: 1,
    marginLeft: 8,
  },
  subMenu: {
    paddingLeft: 18,
    paddingBottom: 5,
    backgroundColor: "rgba(255,255,255,0.09)",
  },
  menuItemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.04)",
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.secondary,
  },
});

export default DropdownMenu;
