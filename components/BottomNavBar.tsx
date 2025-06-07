import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

export const BottomNavBar = () => {
  return (
    <View
      className="bg-secondary100 absolute bottom-5 left-0 right-0 h-20"
      style={styles.shadowContainer}>
      <View className="relative h-full flex-row justify-between">
        <TouchableOpacity className="absolute bottom-4 left-4 items-center justify-center">
          <Ionicons name="menu" size={24} color="gray" />
          <Text className="text-secondary text-xs">Menú</Text>
        </TouchableOpacity>

        <TouchableOpacity className="absolute bottom-4 right-4 items-center justify-center">
          <AntDesign name="home" size={24} color="gray" />
          <Text className="text-secondary text-xs">Home</Text>
        </TouchableOpacity>
      </View>

      <View className="absolute -top-8 left-1/2 z-10 -translate-x-1/2">
        <TouchableOpacity
          className="bg-secondary100 h-20 w-20 items-center justify-center rounded-full"
          style={styles.shadowContainer}>
          <Image source={require('assets/sapientia.webp')} />
        </TouchableOpacity>
        <Text className="text-secondary -mt-4 text-center text-xs">Sapient-IA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#084771',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 4,
  },
});
