import * as React from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
// import Shape2 from "../assets/shape-2.svg"
// import Shape1 from "../assets/shape-1.svg"

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
                <View style={{ backgroundColor: '#fff', borderRadius: 20, overflow: 'hidden', width: '90%', maxWidth: 400, maxHeight: '90%', flex: 1 }}>
                    <Front />
                    <Pressable onPress={onClose} style={{ padding: 16, alignItems: 'center' }}>
                        <Text style={{ color: '#2e9da6', fontWeight: 'bold' }}>Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const Front = () => {

    return (
        <View style={[styles.view, styles.viewBg]}>
            <View style={styles.img026} />
            <Image style={styles.image33Icon} resizeMode="cover" source={require("@/assets/images/uce_logo.png")} width={64} height={64} />
            <Image style={styles.qrCode025} resizeMode="cover" source={require("@/assets/images/carnet_perfil.png")} />
            <Text style={[styles.satfDescrotopm, styles.positionFlexBox]}>
                <Text style={styles.ci}>
                    <Text style={styles.ci1Typo}>C.I</Text>
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.ci}>{`        `}</Text>
                </Text>
                <Text style={styles.text2}>
                    <Text style={styles.text}>{`     `}</Text>
                    <Text style={styles.text4}>{` : 1751165216`}</Text>
                </Text>
                <Text style={styles.feTypo}>{`F.E    `}</Text>
                <Text style={styles.text2}>
                    <Text style={styles.text}>{`          `}</Text>
                    <Text style={styles.text4}>{`: 02/08/1999
            						`}</Text>
                </Text>
                <Text style={[styles.sangre, styles.ci1Typo]}>Sangre</Text>
                <Text style={styles.text2}>
                    <Text style={styles.text}>{`     `}</Text>
                    <Text style={styles.text4}> : A</Text>
                </Text>
                <Text style={styles.text2}>
                    <Text style={styles.text4}>{`+
            						`}</Text>
                </Text>
                <Text style={[styles.sangre, styles.ci1Typo]}>Teléfono</Text>
                <Text style={styles.text2}>
                    <Text style={styles.text}>{`   `}</Text>
                    <Text style={styles.text4}>{`: 0992829992
            						`}</Text>
                </Text>
                <Text style={[styles.sangre, styles.ci1Typo]}>E-mail</Text>
                <Text style={styles.text2}>
                    <Text style={styles.text}>{`       `}</Text>
                    <Text style={styles.text4}>: mamolinay@uce.edu.ec</Text>
                </Text>
            </Text>
            <View style={[styles.staffNameDesignation, styles.nameLayout]}>
                <Text style={[styles.position, styles.feTypo]}>Estudiante</Text>
                <Text style={[styles.name, styles.nameLayout]}>Miguel Angel Molina Yugsi</Text>
            </View>
            <View style={styles.comjpanyNameLogo}>
                <View style={styles.namePosition}>
                    <Text style={[styles.name1, styles.namePosition]}>{`Universidad Central del
            						Ecuador`}</Text>
                </View>
            </View>
            <Image style={styles.image30Icon} resizeMode="cover" source="image 30.png" />
        </View>
    );
};

const styles = StyleSheet.create({
    front: {
        flex: 1,
        backgroundColor: "#fff"
    },
    viewBg: {
        backgroundColor: Colors.secondary_100,
        flex: 1
    },
    positionFlexBox: {
        textAlign: "left",
        position: "absolute"
    },
    ci1Typo: {
        fontFamily: "Roboto-Bold",
        fontWeight: "700"
    },
    nameLayout: {
        width: 188,
        position: "absolute"
    },
    feTypo: {
        fontWeight: "600",
        fontFamily: "Roboto-Bold",
        color: "#2e9da6"
    },
    namePosition: {
        marginTop: -24.5,
        height: 49,
        width: 322,
        left: "50%",
        top: "50%",
        marginLeft: -161,
        position: "absolute"
    },
    shape2Icon: {
        top: 462,
        left: 0,
        position: "absolute"
    },
    shape1Icon: {
        top: -1,
        left: -6,
        position: "absolute"
    },
    img026: {
        top: 124,
        left: 102,
        borderRadius: 173,
        borderStyle: "solid",
        borderColor: "#2e9da6",
        borderWidth: 5.2,
        width: 148,
        height: 148,
        position: "absolute",
        overflow: "hidden"
    },
    image33Icon: {
        top: 114,
        left: 90,
        width: 167,
        height: 167,
        position: "absolute"
    },
    qrCode025: {
        top: 469,
        width: 214,
        height: 35,
        left: 69,
        position: "absolute",
        overflow: "hidden"
    },
    ci: {
        color: "#2e9da6"
    },
    text: {
        fontFamily: "Roboto-Regular"
    },
    text4: {
        fontWeight: "500",
        fontFamily: "Roboto-Medium"
    },
    text2: {
        color: "#000"
    },
    sangre: {
        color: "#2e9da6"
    },
    satfDescrotopm: {
        top: 366,
        fontSize: 14,
        left: 69
    },
    position: {
        top: 61,
        left: 33,
        fontSize: 17,
        textAlign: "left",
        position: "absolute"
    },
    name: {
        top: 0,
        fontSize: 25,
        fontFamily: "Kameron-Bold",
        fontWeight: "700",
        width: 188,
        textAlign: "left",
        left: 0
    },
    staffNameDesignation: {
        top: 278,
        left: 100,
        height: 81
    },
    name1: {
        fontSize: 21,
        fontFamily: "Kameron",
        color: "#fff",
        textAlign: "center"
    },
    comjpanyNameLogo: {
        marginTop: -212.8,
        height: 49,
        width: 322,
        left: "50%",
        top: "50%",
        marginLeft: -161,
        position: "absolute"
    },
    image30Icon: {
        width: "12.22%",
        top: 15,
        right: "44.6%",
        left: "43.18%",
        maxWidth: "100%",
        height: 43,
        position: "absolute",
        overflow: "hidden"
    },
    view: {
        width: "100%",
        borderRadius: 25,
        height: 556,
        overflow: "hidden"
    }
});

export default CarnetModal;
