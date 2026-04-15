import { View, Text, Image, StyleSheet } from 'react-native';
import aluno from '../../assets/aluno.png';

export default function PerfilScreen({ route }) {
  const { nome } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>{nome}</Text>

      <Image
      source={aluno}
      style={styles.foto}
      />

      <Text style={styles.rm}>RM: 565194</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa'
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20
  },
  rm: {
    fontSize: 18
  }
});