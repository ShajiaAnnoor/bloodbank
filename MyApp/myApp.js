import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RequestForBlood from '../Forms/requestForBlood';
import OrganizationList from '../List/organizationList';


const Stack = createStackNavigator();

function App() {
  return (
    //<Stack.Navigator initialRouteName="requestForBlood">
     <Stack.Navigator initialRouteName="organizationList">
    
      <Stack.Screen
        name="organizationList"
        component={OrganizationList}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />

     

    </Stack.Navigator>
  );
}

export default function MyApp() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}