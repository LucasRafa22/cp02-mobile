import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroScreen from '../screens/CadastroScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
    </Stack.Navigator>
  );
}