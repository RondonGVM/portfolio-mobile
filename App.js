import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Jogo from './src/screens/Jogo';
import Sobre from './src/screens/Sobre';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="Sobre" component={Sobre} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
