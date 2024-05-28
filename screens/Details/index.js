import React from 'react';
import { Text, StyleSheet, View, Image, FlatList} from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import ROTINAS from '../../data/index';

export default function Home() {
  return (
    <View style={estilo.container}>
    
      <Text>essa é a tela de detalhes carai</Text>   
   
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  }
});