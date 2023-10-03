import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Usuario from './src/Usuario';

export default function App() {
  const [data, setData] = useState([
    {id: '1', nome: 'Felipe', cargo: 'Dev'},
    {id: '2', nome: 'Monize', cargo: 'Contadora'},
    {id: '3', nome: 'Gislaine', cargo: 'Contadora'},
    {id: '4', nome: 'Gleibison', cargo: 'Detail'},
  ]);

  const [selectedValue, setSelectedValue] = useState();

  let usersList = data.map((v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#FEFEFE', alignItems: 'center', padding: 20}}>
          <Text style={{textAlign: 'center', textTransform: 'uppercase', fontSize: 18, color: '#000', fontWeight: 'bold'}}>Seja bem-vindo</Text>
      </View>
      <ScrollView style={{flex: 1 }}>
        <View style={{backgroundColor: 'blue', flex: 1}}>
          <FlatList 
            data={data}
            renderItem={({ item }) => <Usuario data={item} />}
          />
        </View>

        <View>
          <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
            {usersList}
          </Picker>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
