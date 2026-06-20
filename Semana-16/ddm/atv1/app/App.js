import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './pages/Home';
import { Details } from './pages/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{ title: 'Lista de Posts' }} />
        <Stack.Screen name="Details" component={Details}
          options={{ title: 'Detalhes do Post' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}