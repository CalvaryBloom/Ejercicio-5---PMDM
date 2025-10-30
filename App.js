/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 30/10/2025 
*
* Apartado 2:
* Modifica el ejercicio anterior para que cada valor numérico guardado en
* cada posición del array se muestre en un componente Text.
*/
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [myArray, setMyArray] = useState([]);

  const handleOnPress = () => {
    if (texto === '') {
      alert('No has introducido nada.');
    } else if (!isNaN(texto)) {
      alert('Tú número se ha guardado.');
      let newArray = [...myArray];
      newArray.push(texto);
      setMyArray(newArray);
      setTexto('');
    } else {
      alert('Has introducido texto. Introduce un número.');
      setTexto('');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, marginBottom: 100, }}
        placeholder="Inserta tu texto ..."
        onChangeText={(newText) => setTexto(newText)}
        defaultValue={texto}
      />

      <Pressable onPress={handleOnPress}>
        <Text style={styles.text}>PULSA...</Text>
      </Pressable>

      {myArray.map((value, index) => (
        <Text key={index.toString()}>{value}</Text>
      ))}

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
  text: {
    height: 40,
    width: 80,
    backgroundColor: 'lightblue',
    borderRadius: 8,
    padding: 6,
  }
});
