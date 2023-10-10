import React from 'react'
import PopularesSeries from './PopularesSeries';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const SeriessStack = () => {


  return (
    
     <>
    <Stack.Navigator>
        <Stack.Screen name="series populares" component={PopularesSeries} options={{ title: 'Series Populares' }} />
    </Stack.Navigator>
     </>
    
  )
}

export default SeriessStack