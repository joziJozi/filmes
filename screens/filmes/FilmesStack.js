import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FilmesPopulares from './FilmesPopulares';
import FilmesDetalhes from './FilmesDetalhes';
import Atores from './Atores';

const Stack = createNativeStackNavigator();

const FilmesStack = () => {
  return (
    <>
    <Stack.Navigator>
          <Stack.Screen name="Filmes-Populares" component={FilmesPopulares} options={{title: 'Filmes Populares'}}></Stack.Screen>
          <Stack.Screen name="Filmes-Detalhes" component={FilmesDetalhes} options={{title: 'Filmes Detalhes'}}></Stack.Screen>
          <Stack.Screen name="Atores" component={Atores} options={{title: 'Atores'}}></Stack.Screen>
    </Stack.Navigator>
    </>
  )
}

export default FilmesStack