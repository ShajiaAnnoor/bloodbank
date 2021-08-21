import React, {
  useState,
  Fragment,
} from 'react';
import {
  Button,
  Image,
  Switch,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTab from '../MyApp/MyTab';


import { registerForPushNotificationsAsync, sendPushNotification } from "../Notifications/example"
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
  const [expoPushToken, setExpoPushToken] = useState("");

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const register = async() => { 
    await registerForPushNotificationsAsync().then(token => setExpoPushToken(token)) ; 
    toggleSwitch();
  }

  const send = async () => {
    alert(expoPushToken);
    await sendPushNotification(expoPushToken);    
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
            <Fragment>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={register}
              value={isEnabled}
            />
            <Button  
              onPress={send}  
              title="Learn More"  
              color="#841584"  
              accessibilityLabel="Learn more about this purple button"
            />
            </Fragment>
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