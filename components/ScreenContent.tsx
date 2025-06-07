import {
  Image,
  Text,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import medallas from '../data/medallas.json';
import { AccesosDirectos } from '../data/acceso-directo';
import { Noticias } from '../data/noticias';
import { AntDesign, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { Card } from './Card';
import { useState } from 'react';

export const ScreenContent = () => {
  const [section, setSection] = useState<'accesos' | 'noticias'>('accesos');

  const showAccesos = () => setSection('accesos');
  const showNoticias = () => setSection('noticias');

  return (
    <View className="bg-secondary100 relative flex-1">
      <StatusBar barStyle="light-content" />
      <Image
        source={require('assets/fondo-logo.webp')}
        className={'absolute h-full w-full'}
        resizeMode="contain"
      />
      <Image source={require('assets/fondo-uce.webp')} />
      <AntDesign name="idcard" size={40} color="white" className="absolute left-5 top-16" />
      <View
        className="bg-secondary100 absolute left-5 right-5 top-1/4 z-20 flex flex-col items-center gap-4 rounded-2xl p-10"
        style={styles.shadowContainer}>
        <Image
          source={require('assets/perfil.webp')}
          className="absolute -top-1/3 ml-auto mr-auto h-32 w-32 rounded-full border-2 border-gray-400"
        />
        <View className="mt-9 flex items-center gap-2">
          <Text className="font-gravity text-lg font-semibold">Luis González</Text>
          <Text className="font-gravity text-lg font-extralight">Sistemas de Información</Text>
        </View>
        <View className="gap-y flex w-full flex-row gap-6">
          {medallas.map((medalla, index) => (
            <View key={index} className="flex w-24 items-center">
              <MaterialCommunityIcons
                name={(medalla.icon as any) || 'symbol'}
                size={50}
                color="#AD9218"
              />
              <Text className="text-tertiary font-gravity mt-1 text-center text-sm font-bold">
                {medalla.medalla}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View className="absolute bottom-24 left-0 right-0 h-80 p-5">
        <View className="mb-4 flex flex-row items-center justify-start gap-4">
          <TouchableOpacity
            onPress={showAccesos}
            className={`border-b-2 p-2 ${
              section === 'accesos' ? 'border-tertiary' : 'border-secondary'
            }`}>
            <Text
              className={`font-gravity ${
                section === 'accesos' ? 'text-tertiary' : 'text-secondary'
              }`}>
              Accesos Directos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={showNoticias}
            className={`border-b-2 p-2 ${
              section === 'noticias' ? 'border-tertiary' : 'border-secondary'
            }`}>
            <Text
              className={`font-gravity ${
                section === 'noticias' ? 'text-tertiary' : 'text-secondary'
              }`}>
              Noticias Semanales
            </Text>
          </TouchableOpacity>
        </View>
        {section === 'accesos' ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4">
            {AccesosDirectos.map((acceso, index) => (
              <Card key={index} title={acceso.title} photo_url={acceso.photo_url} />
            ))}
            <View className="bg-primary/20 mr-4 flex h-48 w-64 items-center justify-center gap-2 rounded-lg shadow-md">
              <View className="aspect-square items-center rounded-full border border-dashed bg-white p-4">
                <FontAwesome6 name="add" size={24} color="black" />
              </View>
              <Text className="text-primary font-gravity font-semibold">Nuevo Acceso Directo</Text>
            </View>
          </ScrollView>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Noticias.map((noticia, index) => (
              <Card key={index} title={noticia.title} photo_url={noticia.photo_url} />
            ))}
          </ScrollView>
        )}
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
