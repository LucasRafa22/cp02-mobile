import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, SafeAreaView } from 'react-native';
import RenderizarDados from './components/RenderizarDados';

export default function App() {
  const [nomeCliente, setNomeCliente] = useState('');
  const [emailCliente, setEmailCliente] = useState('');
  const [mostrarDados, setMostrarDados] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>
        
        <TextInput 
          placeholder='Digite seu nome' 
          value={nomeCliente} 
          maxLength={30} 
          onChangeText={(valor) => setNomeCliente(valor)}
          style={styles.input}
        />
        
        <TextInput 
          placeholder='Digite seu email' 
          value={emailCliente} 
          maxLength={30} 
          autoCapitalize='none' 
          keyboardType="email-address"
          onChangeText={(valor) => setEmailCliente(valor)} 
          style={styles.input}
        />

        <Button 
          title='Clique aqui para enviar' 
          color={'#000'} 
          onPress={() => setMostrarDados(true)} 
        />

        {mostrarDados && (
          <RenderizarDados nome={nomeCliente} email={emailCliente} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 15,
    padding: 8
  }
});
