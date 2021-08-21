import React, {
  useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTab from '../MyApp/MyTab';
import {
  Image,
  Switch,
} from 'react-native';

import { registerForPushNotificationsAsync } from "../Notifications/example"
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
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const register = () => { 
    registerForPushNotificationsAsync().then(token => alert(token)) ; 
    toggleSwitch();
  }

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
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={register}
              value={isEnabled}
            />
          ),
          headerLeft: () => {
            
          }
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