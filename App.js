import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';

export default function App() {
  
function CalculoCombustivel()
{
  const resultado = Km / combustivel
  alert('O consumo do seu carro é de' + resultado);
}

const [Km,setKm] = useState('');
const [combustivel,setCombustivel] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      Consumo de Combustivel.
      </Text>
      <TextInput
      style={styles.input}
       placeholder="Digite os KM a ser precorrido: "
       keyboardType="numeric"
       onChangeText={(Km)=>setKm(Km)}
      />
      <TextInput
       style={styles.input}
       placeholder="Digite a quantidade de combustivel: "
       keyboardType="numeric"
       onChangeText={(combustivel)=>setCombustivel(combustivel)}
      />

      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
     <Text style={styles.btntext}>
     Calcular o Consumo
     </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn:
  {
    alignItems: 'center',
    backgroundColor: '#7FFFD4',
    padding: 15,
    borderRadius:10,
  },
  btntext:
  {
     fontSize:30,
     color: '#00000',
  },
  input:
  {
    backgroundColor: '#ADFF2F',
    margin:10,
    borderRadius: 10,
    height:60,
    fontSize:20,
    fontWeight: 'bold'

  }
});
