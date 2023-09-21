import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './RegisterForm.styles'
import { TextInput, Button } from 'react-native-paper';
import { globalStyles } from '../../../styles';

export default function RegisterForm() {
  const [text, setText] = React.useState("");
  return (
    <View >
      <TextInput
        label="Nombre de usuario"
        value={text}
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={text => setText(text)}
      />

      <TextInput
        label="Correo electronico"
        value={text}
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={text => setText(text)}
      />

      <TextInput
        label="Contraseña"
        secureTextEntry={true}
        value={text}
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={text => setText(text)}
      />

      <TextInput
        label="Repetir contraseña"
        secureTextEntry={true}
        value={text}
        style={globalStyles.input}
        autoCapitalize="none"
        onChangeText={text => setText(text)}
      />
      <Button mode="contained" 
       style={globalStyles.buttonText}>
        Registrarse
       </Button>

      <Button mode="text"
        style={globalStyles.buttonText}>
        Iniciar sesion
      </Button>
    </View>
  )
}