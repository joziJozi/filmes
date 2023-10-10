import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesStack from './screens/filmes/FilmesStack';
import AtoresStack from './screens/atores/AtoresStack';
import SeriessStack from './screens/series/SeriessStack';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  return (
    <>

      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Filmes"
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="home" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Atores"
              component={AtoresStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Series"
              component={SeriessStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-arrow-right" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Configurações"
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-cog-outline" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>

    </>
  );
}


