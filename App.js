/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 30/10/2025 
*
* Apartado 4:
* Modifica el ejercicio anterior para que ahora se guarden en un array sólo las
* letras introducidas mediante TextInput. Implementa debajo del
* componente Button otros dos componentes TextInput y Button.
* Implementa la lógica necesaria para que después de haber introducido las
* posiciones del array pertinente, se muestre por pantalla el contenido de la
* posición del array que se indique con el segundo TextInput. Nota: en caso
* de intentar acceder a una posición del array que no existe, saltará una
* alerta. 
*/
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [indice, setIndice] = useState();
  const [texto, setTexto] = useState('');
  const [texto2, setTexto2] = useState('');
  const [myTextArray, setMyTextArray] = useState([]);

  const handleOnPress = () => {
    if (texto === '') {
      alert('No has introducido nada.');
    } else if (!isNaN(texto)) {
      alert('Solo se puede introducir texto.');
      setTexto('');
    } else {
      alert('Tú texto se ha guardado.');
      let newArray = [...myTextArray];
      newArray.push(texto);
      setMyTextArray(newArray);
      setTexto('');
    }
  }

  const mostrarIndiceArray = () => {
    if (indice === ''){
      alert('No has introducido nada.');
      setIndice('');
    } else if (isNaN(indice)){
      alert('Solo puedes introducir un número');
      setIndice('');
    }else if (parseInt(indice) > myTextArray.length - 1 || parseInt(indice) < 0){
      alert('Introduce una posición correcta.');
      setIndice('');
    }else{
      setIndice(parseInt(indice));
      setTexto2(myTextArray[indice]);
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

      <TextInput
        style={{ height: 40, marginBottom: 20, marginTop: 20, }}
        placeholder="Inserta posición array ..."
        onChangeText={(newText) => setIndice(newText)}
        defaultValue= {indice}
      />

      <Pressable onPress={mostrarIndiceArray}>
        <Text style={styles.text}>PULSA...</Text>
      </Pressable>

      <Text style={{ padding: 10, fontSize: 42 }}>{texto2}</Text>

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
