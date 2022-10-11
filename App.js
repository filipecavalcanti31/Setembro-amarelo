import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import Cartilha from './components/Cartilha';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        SETEMBRO AMARELO!!!
        Transtornos mentais: você sabia que praticamente todas as pessoas que cometeram suicídio apresentavam pelo menos um transtorno psiquiátrico? Pessoas com depressão, transtorno bipolar, trantornos relacionados ao uso de drogas lícitas ou ilícitas(álcool, maconha, crack e cocaína, por exemplo), esquizofrenia e transtorno de personalidade fazem parte do grupo de risco. Dessa forma, a identificação e o tratamento dos trastornos mentais pelo médico psiquiatra estão entre os principais fatores de proteção na prevenção do suicídio. 

        
        
        

      </Text>

      <View style={styles.image}>
      <Text></Text>
      <Image 
      style={styles.img}
       source={require('./assets/SETEMBRO_AM.png')}
       resizeMode = 'stretch'


        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
   // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'blue',
   // padding: 8,
  },
  image:{
    whidth:'100%',
   borderWidth: 1,
   flex:1,
  },
  img: {
   width:'100%',
   height:'100%'
  },
  paragraph: {
    margin: 24,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
