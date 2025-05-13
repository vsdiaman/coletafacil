import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TextInputMask } from "react-native-masked-text"; // Importe o TextInputMask

const LoginScreen = () => {
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    // Lógica para login, por exemplo, validar os dados e enviar para o backend
    console.log("Celular:", phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Meu Coleta Fácil</Text>

      {/* Campo de celular com máscara */}
      <TextInputMask
        type={"cel-phone"} // Tipo para celular
        options={{
          maskType: "BRL", // Brasil, ou mude conforme o país
          withDDD: true, // Habilita o DDD
          dddMask: "(99)", // Formatação do DDD
        }}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Digite seu celular"
      />

      {/* Campo de senha */}
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Digite sua senha"
        // Adicione a lógica para senha aqui
      />

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 8,
  },
});

export default LoginScreen;
