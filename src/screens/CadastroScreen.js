import { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaskedTextInput } from 'react-native-mask-text';

export default function CadastroScreen({ navigation }) {
  const [nomeAluno, setNomeAluno] = useState('');
  const [cursoAluno, setCursoAluno] = useState('');
  const [disciplinaAluno, setDisciplinaAluno] = useState('');
  const [descricaoAluno, setDescricaoAluno] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    async function carregarDados() {
      const dados = await AsyncStorage.getItem("usuario");

      if (dados) {
        const obj = JSON.parse(dados);

        setNomeAluno(obj.nomeAluno);
        setCursoAluno(obj.cursoAluno);
        setDisciplinaAluno(obj.disciplinaAluno);
        setDescricaoAluno(obj.descricaoAluno);
        setCpf(obj.cpf);
        setTelefone(obj.telefone);
      }
    }

    carregarDados();
  }, []);

  const handleSubmit = async () => {
    if (
      !nomeAluno ||
      !cursoAluno ||
      !disciplinaAluno ||
      !descricaoAluno ||
      !cpf ||
      !telefone
    ) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const dados = {
      nomeAluno,
      cursoAluno,
      disciplinaAluno,
      descricaoAluno,
      cpf,
      telefone
    };

    await AsyncStorage.setItem("usuario", JSON.stringify(dados));

    navigation.navigate("Perfil", {
      nome: nomeAluno
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Registro Acadêmico</Text>

        <TextInput
          placeholder='Nome do Aluno'
          value={nomeAluno}
          onChangeText={setNomeAluno}
          style={styles.input}
        />

        <TextInput
          placeholder='Curso'
          value={cursoAluno}
          onChangeText={setCursoAluno}
          style={styles.input}
        />

        <TextInput
          placeholder='Disciplina'
          value={disciplinaAluno}
          onChangeText={setDisciplinaAluno}
          style={styles.input}
        />

        <TextInput
          placeholder='Descrição'
          value={descricaoAluno}
          onChangeText={setDescricaoAluno}
          style={[styles.input, styles.textArea]}
          multiline
        />

        {/* CPF */}
        <MaskedTextInput
          mask="999.999.999-99"
          value={cpf}
          onChangeText={setCpf}
          style={styles.input}
          placeholder="CPF"
        />

        {/* Telefone */}
        <MaskedTextInput
          mask="(99) 99999-9999"
          value={telefone}
          onChangeText={setTelefone}
          style={styles.input}
          placeholder="Telefone"
        />

        <View style={styles.buttonWrapper}>
          <Button title="Salvar" onPress={handleSubmit} color="#003366" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f8f9fa' 
  },
  content: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 30, 
    color: '#2c3e50' 
  },
  input: { 
    borderBottomWidth: 1, 
    borderBottomColor: '#bdc3c7',
    marginBottom: 20, 
    padding: 10,
    fontSize: 16
  },
  textArea: {
    height: 60,
    textAlignVertical: 'top'
  },
  buttonWrapper: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden'
  }
});