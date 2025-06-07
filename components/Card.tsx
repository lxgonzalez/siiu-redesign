import { View, Text, Image, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
  photo_url: any;
}

export const Card: React.FC<CardProps> = ({ title, photo_url }) => {
  return (
    <View className="mr-4 h-48 w-64 rounded-xl bg-white shadow-md" style={styles.shadowContainer}>
      <Image source={photo_url} className="h-36 w-full rounded-t-xl object-cover" />
      <View className="flex flex-1 justify-center p-2">
        <Text className="font-gravity text-base font-light">{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#084771',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
