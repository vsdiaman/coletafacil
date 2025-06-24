import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.replace("Login");
  };

  const handleRegister = () => {
    navigation.replace("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao</Text>
      <Text style={styles.appName}>Meu Coleta Fácil</Text>

      <Text style={styles.description}>
        Este aplicativo foi desenvolvido pela Prefeitura Municipal de Ibiaí/MG
        para facilitar o agendamento da coleta de entulhos e materiais diversos,
        promovendo mais praticidade e limpeza para toda a população.
      </Text>
      {/* teste */}
      <View style={styles.buttonContainer}>
        <Button
          title="Fazer Login"
          onPress={() => {
            handleLogin();
          }}
        />
        <View style={{ height: 20 }} />
        <Button
          title="Cadastrar-se"
          onPress={() => {
            handleRegister();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
  },
  appName: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2c3e50",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#555",
  },
  buttonContainer: {
    width: "100%",
  },
});

export default OnboardingScreen;
