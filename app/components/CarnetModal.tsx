import { Colors } from "@/constants/Colors";
import { Information } from "@/constants/informacion";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import * as React from "react";
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import SvgCurva from "./ui/svg/SvgCurva";
import SvgCurvaBackBottom from "./ui/svg/SvgCurvaBackBottom";
import SvgCurvaBackTop from "./ui/svg/SvgCurvaBackTop";

interface CarnetModalProps {
    visible: boolean;
    onClose: () => void;
}

const CarnetModal: React.FC<CarnetModalProps> = ({ visible, onClose }) => {
    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.container}>
                        <Front />
                        <Back />
                        <Pressable onPress={onClose} style={{ padding: 16, alignItems: 'center' }}>
                            <Text style={{ color: Colors.primary, fontWeight: 'bold' }}>Cerrar</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const Front = () => {

    return (
        <View style={styles.view_front}>
            <Image source={require('@/assets/images/uce_logo.png')} style={styles.carnet_logo}></Image>
            <Text style={styles.carnet_universidad}>Universidad Central del Ecuador</Text>
            <View style={styles.svg_plomo}>
                <SvgCurva color={Colors.secondary} />
            </View>
            <View style={styles.svg_azul}>
                <SvgCurva color={Colors.primary} />
            </View>
            <View style={styles.perfil}>
                <Image source={Information.photo_url} style={styles.perfil_foto}></Image>
            </View>
            <View style={styles.information}>
                <Text style={styles.name}>{Information.name}</Text>
                <Text style={styles.carrera}>{Information.carrera}</Text>
                <Text style={styles.estudiante}>Estudiante</Text>
                <View>
                    <Text style={styles.text}>C.I:                <Text style={styles.value}>1751165216</Text></Text>
                    <Text style={styles.text}>F.E:                <Text style={styles.value}>02/08/1999</Text></Text>
                    <Text style={styles.text}>Sangre:        <Text style={styles.value}>A+</Text></Text>
                    <Text style={styles.text}>Teléfono:     <Text style={styles.value}>0992829992</Text></Text>
                    <Text style={styles.text}>E-mail:         <Text style={styles.value}>anlopez@uce.edu.ec</Text></Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 130 }}>
                <FontAwesome5 name="barcode" size={50} color="black" />
                <FontAwesome5 name="barcode" size={50} color="black" />
                <FontAwesome5 name="barcode" size={50} color="black" />
            </View>
        </View>
    );
};

const Back = () => {
    return (
        <View style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            height: 550,
            alignSelf: 'center',
            elevation: 2,
            marginVertical: 20,
            borderWidth: 2,
            borderColor: Colors.secondary,
            overflow: 'hidden',
        }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }}>
                <SvgCurvaBackTop color={Colors.primary} />
            </View>
            <View style={{ alignItems: 'flex-start', marginTop: 10, marginLeft: 12, zIndex: 2 }}>
                <Image
                    source={require('@/assets/images/uce_logo.png')}
                    style={{ width: 48, height: 48 }}
                    resizeMode="contain"
                />
            </View>
            <View style={{ marginTop: 60 }} />
            <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 15, textAlign: 'center', marginBottom: 16 }}>
                INGENIERIA Y CIENCIAS APLICADAS
            </Text>
            <Text style={{ color: Colors.primary, fontSize: 13, textAlign: 'center', marginBottom: 32 }}>
                SISTEMAS DE INFORMACION - REDISEÑO
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16, marginHorizontal: 30 }}>
                <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: Colors.primary, marginTop: 3, marginRight: 8 }} />
                <Text style={{ flex: 1, color: '#222', fontSize: 13 }}>
                    Este documento es personal e intransferible y es propiedad de la Universidad Central del Ecuador
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16, marginHorizontal: 30 }}>
                <View style={{ width: 18, height: 18, borderRadius: 9, backgroundColor: Colors.primary, marginTop: 3, marginRight: 8 }} />
                <Text style={{ flex: 1, color: '#222', fontSize: 13 }}>
                    El mal uso de este documento será sujeto a sanción
                </Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 70, width: '100%', justifyContent: 'center' }}>
                <Text style={{ color: Colors.primary, fontWeight: 'bold', fontSize: 13 }}>ACREDITADA :</Text>
                <Text style={{ color: '#222', fontSize: 13, marginLeft: 6 }}>2020 - 2025</Text>
            </View>

            <View style={{ marginHorizontal: 32 }}>
                <Text style={{ color: '#888', fontSize: 11 }}>
                    La pérdida del carné debe denunciarse inmediatamente como requisito para solicitar un nuevo carné que tendrá un costo.
                </Text>
            </View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1 }}>
                <SvgCurvaBackBottom color={Colors.primary} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginBottom: 60,
        backgroundColor: Colors.secondary_100,
        borderRadius: 20,
        overflow: 'hidden',
        width: '90%',
        maxWidth: 400,
        maxHeight: '100%',
        flex: 1,
        padding: 16,
    },
    view_front: {
        backgroundColor: '#fff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32,
        borderWidth: 2,
        borderColor: Colors.secondary,
        height: 550,
        marginBottom: 20,
    },
    carnet_logo: {
        position: 'absolute',
        top: 16,
        zIndex: 999,
        width: 50,
        height: 50,
        marginBottom: 20,
    },
    carnet_universidad: {
        position: 'absolute',
        top: 80,
        fontSize: 20,
        color: Colors.secondary_100,
        zIndex: 1,
        textAlign: 'center',
        width: 250,
    },
    svg_azul: {
        position: 'absolute',
        top: 0,
        right: 10,
    },
    svg_plomo: {
        left: -15,
    },
    perfil: {
        top: -60,
        zIndex: 999,
        borderRadius: 100,
        borderWidth: 8,
        borderColor: '#999',
        width: 160,
        height: 160,
    },
    perfil_foto: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    information: {
        position: 'absolute',
        top: 320,
        textAlign: 'center',
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
        gap: 4,
    },
    name: {
        fontSize: 20,
        color: Colors.primary,
        fontWeight: "600",
    },
    carrera: {
        fontSize: 16,
        color: Colors.secondary,
        fontWeight: "500",
    },
    estudiante: {
        fontSize: 16,
        color: Colors.secondary,
        fontWeight: "500",
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: "600",
    },
    value: {
        fontWeight: "400",
        color: '#000',
    },
});

export default CarnetModal;
