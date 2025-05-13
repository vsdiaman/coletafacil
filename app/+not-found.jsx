// app/+not-found.jsx
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function NotFound() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Página não encontrada</Text>
      <Button
        title="Voltar para o início"
        onPress={() => router.replace("/")}
      />
    </View>
  );
}
