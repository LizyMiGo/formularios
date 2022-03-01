import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  const [accountNumber, setAccountNumber] = useState();
  const [phone, setPhone] = useState();
  const [hobby, setHobby] = useState();
  const [favoriteFood, setFavoriteFood] = useState();
  const [bornCity, setBornCity] = useState();

  const peticion = () => {
    var url = 'https://calculadora-server.herokuapp.com/alumns';
    const body = {
      accountNumber: parseInt(accountNumber),
      phone: parseInt(phone),
      hobby,
      favoriteFood,
      bornCity,
    };
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => console.error('Error', error))
      .then(response => Alert.alert('Datos subidos con exito'));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Número de cuenta"
        onChangeText={text => setAccountNumber(text)}
        value={accountNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de teléfono"
        onChangeText={text => setPhone(text)}
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder="Hobby"
        onChangeText={text => setHobby(text)}
        value={hobby}
      />
      <TextInput
        style={styles.input}
        placeholder="Comida favorita"
        onChangeText={text => setFavoriteFood(text)}
        value={favoriteFood}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad de nacimiento"
        onChangeText={text => setBornCity(text)}
        value={bornCity}
      />
      <Button title="Enviar" onPress={peticion} />
    </View>
  );
};
export default App;
