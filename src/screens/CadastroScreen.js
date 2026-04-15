import { View, Text, Button } from 'react-native';

export default function CadastroScreen({ navigation }) {
  return (
    <View>
      <Text>Tela de Cadastro</Text>
      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
    </View>
  );
}