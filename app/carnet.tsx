import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { Image, ScrollView, StatusBar, StyleSheet } from "react-native";

export default function CarnetPage() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar barStyle="dark-content" backgroundColor={Colors.secondary_100} />

            <ScrollView style={styles.page} contentContainerStyle={styles.content}>
                <Image
                    source={require("@/assets/images/carnet_estudiantil.webp")}
                    style={styles.image}
                />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: Colors.secondary_100,
    },
    content: {
        marginVertical: 60,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: 40,
    },
    image: {
        width: "300%",
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain",
    },
});
