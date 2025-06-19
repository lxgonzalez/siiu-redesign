import { Stack } from "expo-router";
import BottomNavBar from "./components/BottomNavBar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <BottomNavBar />
    </>
  );
}
