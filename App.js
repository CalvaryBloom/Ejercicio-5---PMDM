/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 30/10/2025 
*
* Apartado 3:
* Modifica el ejercicio anterior para que ahora se guarden en un array los
* valores numéricos y en otro el resto de valores y ambos arrays se
* rendericen debajo del componente button. Para el array correspondiente a
* las letras se debe mostrar cada posición en un componente Text. Lo mismo
* para el array que contiene los valores numéricos. 
*/
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [myArray, setMyArray] = useState([]);
  const [myTextArray, setMyTextArray] = useState([]);

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
      alert('Tú texto se ha guardado.');
      let newArray = [...myArray];
      newArray.push(texto);
      setMyTextArray(newArray);
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

      {myTextArray.map((value, index) => (
        <Text key={index.toString()}>{value}</Text>
      ))}

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
