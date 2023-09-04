import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardTab from './src/tabs/DashboardTab';
import NewItemTab from './src/tabs/NewItemTab';
import { ApplicationContextProvider } from './src/contexts/ApplicationContext';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ApplicationContextProvider>
      <NavigationContainer>
        <Tab.Navigator
        >
          <Tab.Screen
            name='DashboardTab'
            component={DashboardTab}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name='NewItemTab'
            component={NewItemTab}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ApplicationContextProvider>


  )
};

export default App;