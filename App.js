/*
* 
* AUTOR: BORJA PARDO JUANES
* FECHA: 30/10/2025 
*
* Apartado 5:
* En este ejercicio vamos a trabajar con arrays de objetos. Implementa ahora
* dos componentes TextInput y un componente Button que permitan
* introducir un nombre y un DNI –que deberá ser validado- en un array de
* objetos. Debajo del componente button deberá mostrarse los datos que el
* usuario va introduciendo. 
*/
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [textDni, setTextDni] = useState('');
  const [textName, setTextName] = useState('');
  const [user, setUser] = useState([{ nombre: 'Nombre', dni: 'Dni' }]);

  const handleOnPress = () => {
    if (validateDni(textDni)) {
      alert('DNI y nombre introducidos correctamente');
      let newArray = [...user];
      newArray.push({ nombre: textName, dni: textDni });
      setUser(newArray);
      setTextName('');
      setTextDni('');
    } else {
      alert('Introduce un DNI y nombre correcto');
      setTextDni('');
      setTextName('');
    }
  };

  const validateDni = (textDni) => {
    if (
      textDni !== '' &&
      textDni.length === 9 &&
      isNaN(parseInt(textDni[textDni.length - 1])) &&
      !isNaN(textDni.substring(0, 8)) &&
      textName !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  const users = user.map((value) => (
    <Text>{value.nombre + ' / ' + value.dni}</Text>
  ));

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>DNI</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta DNI"
        onChangeText={(newText) => setTextDni(newText)}
        defaultValue={textDni}
        value={textDni}
      />
      <Text style={{ fontSize: 30 }}>Nombre</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Inserta nombre"
        onChangeText={(newName) => setTextName(newName)}
        defaultValue={textName}
        value={textName}
      />
      <Pressable onPress={handleOnPress}>
        <Text style={styles.text}>Pulsa...</Text>
      </Pressable>
      {users}
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