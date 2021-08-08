import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTab from '../MyApp/MyTab';
import {Button,Image} from 'react-native';

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./Logo1.jpg')}
    />
  );
}

function App() {
  return (
     <Stack.Navigator >
      <Stack.Screen
        name="Root"
        component={MyTab}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
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