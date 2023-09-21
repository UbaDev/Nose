import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native'
import React, { useState } from 'react'
import Fonts from '../../constants/Fonts'
import LoginForm from '../../components/Auth/Login/LoginForm';
import RegisterForm from '../../components/Auth/Register/RegisterForm';

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
 
  const changeForm = () => {
    setIsLogin(!isLogin);
  }

  {/* <View style={styles.container}>
      <Text style={{fontFamily:Fonts.family.bold, fontSize: Fonts.size.large, marginVertical: 20}}>AuthScreen</Text>
       <SocialButton title="Iniciar sesión con Facebook" imageType="facebook" color={Colors.facebookColor}/> 
      <SocialButton title="Iniciar sesión con Google" imageType="google" color={Colors.googleColor}/> 
       <SocialButton title="Iniciar sesión con Twitter" imageType="twitter" color={Colors.twitterColor}/> 
    </View> */}

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={{width: 200, height: 200}}/>
    <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding" : "height"}>
        <Text style={{ fontFamily: Fonts.family.bold, fontSize: Fonts.size.large, marginVertical: 20, textAlign: "center" }}>{isLogin ? "Iniciar sesión" : "Registrarse"}</Text>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <Text style={{ fontFamily: Fonts.family.bold, fontSize: Fonts.size.medium, marginVertical: 20 }} onPress={changeForm}>{isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}</Text>
    </KeyboardAvoidingView>
    </View>
  )
}

  const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center"
  } 
}) 