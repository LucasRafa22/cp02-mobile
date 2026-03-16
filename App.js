import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native';

export default function App() {
  const[nomeCliente, setNomeCliente] = useState('')
  const[emailCliente, setEmailCliente] = useState('')
  const[mostrarDados, setMostrarDados] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View >
    
        <Text style={styles.title}>Cadastro</Text>
        <TextInput 
          placeholder='Digite seu nome'
          value={nomeCliente}
          maxLength={30}
          autoCapitalize='none'
          onChange={(valor) => setNomeCliente(valor)}
        />
        <TextInput 
          placeholder='Digite seu nome'
          value={nomeCliente}
          maxLength={30}
          autoCapitalize='none'
          onChange={(valor) => setEmailCliente(valor)}
        />
        <Button
          title='Clique aqui para enviar'
          color={'#000'}
          onPress={()=>setMostrarDados(true)}
        />

        {mostrarDados&&<RenderizarDados nameCliente={nomeCliente} emailCliente={emailCliente}/>}
    
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24
  }
});
