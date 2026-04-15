import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nomeAluno, setNomeAluno] = useState('');
  const [cursoAluno, setCursoAluno] = useState('');
  const [disciplinaAluno, setDisciplinaAluno] = useState('');
  const [descricaoAluno, setDescricaoAluno] = useState('');

  const handleSubmit = () => {
    navigation.navigate("Perfil", {
      nome: nomeAluno
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Registro Acadêmico</Text>

        <TextInput placeholder='Nome' value={nomeAluno} onChangeText={setNomeAluno} style={styles.input} />
        <TextInput placeholder='Curso' value={cursoAluno} onChangeText={setCursoAluno} style={styles.input} />
        <TextInput placeholder='Disciplina' value={disciplinaAluno} onChangeText={setDisciplinaAluno} style={styles.input} />
        <TextInput placeholder='Descrição' value={descricaoAluno} onChangeText={setDescricaoAluno} style={styles.input} />

        <Button title="Salvar" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    
  container: { 
    flex: 1 
},

  content: { 
    padding: 20 
},

  input: { 
    borderBottomWidth: 1, 
    marginBottom: 15 
},

  title: { 
    fontSize: 20, 
    marginBottom: 20 
}

});