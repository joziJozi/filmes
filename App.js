import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';
import { View } from 'react-native-web';
import Atores from './screens/filmes/Atores';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    
      <PaperProvider>       
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Filmes-Populares" component={FilmesPopulares} options={{title: 'Filmes Populares'}}></Stack.Screen>
          <Stack.Screen name="Filmes-Detalhes" component={FilmesDetalhes} options={{title: 'Filmes Detalhes'}}></Stack.Screen>
          <Stack.Screen name="Atores" component={Atores} options={{title: 'Atores'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
      
    </>
  );
}


