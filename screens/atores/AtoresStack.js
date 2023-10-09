import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AtoresDetalhes from './AtoresDetalhes';
import Atores from './Atores';
import AtoresPopulares from './AtoresPopulares';

const Stack = createNativeStackNavigator();

const AtoresStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="atores-populares" component={AtoresPopulares} options={{ title: 'Atores Populares' }} />
                <Stack.Screen name="atores-detalhes" component={AtoresDetalhes} options={{ title: 'Detalhes' }} />
            </Stack.Navigator>
        </>
    )
}

export default AtoresStack