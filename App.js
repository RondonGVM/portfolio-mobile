import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Jogo from './src/screens/Jogo';
import Sobre from './src/screens/Sobre';
import Projetos from './src/screens/Projetos';
import Experiencias from './src/screens/Experiencias';
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Jogo" component={Jogo} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Projetos" component={Projetos} />
        <Stack.Screen name="Experiencias" component={Experiencias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
