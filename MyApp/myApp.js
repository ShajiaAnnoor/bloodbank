import React, {
  useState,
} from 'react';
import {
  Image,
  Switch,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { styles } from "./myApp.style";
import MyTab from '../MyApp/MyTab';
import ProfileNavigator from '../Profile/ProfileNavigatorButton/profileNavigatorButton.js'
import Patient from "../Profile/Patient/PatientProfile/PatientProfile";
import Donor from "../Profile/Donor/DonorProfile/donorProfile";
import Organization from "../Profile/Organization/OrganizationProfile/OrganizationProfile";
import More from "../More/index.js";
import Eligibility from "../More/eligibility.js";



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

  {/*const send = async () => {
    alert(expoPushToken);
    await sendPushNotification(expoPushToken);    
  }*/}

  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Root"
        component={MyTab}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#69c9a8' },
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <View style ={styles.headerRightStyle}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={register}
                value={isEnabled}
              />
             {/*} <Button  
                onPress={send}  
                title="Learn More"  
                color="#841584"  
                accessibilityLabel="Learn more about this purple button"
          />*/}
              <View>
                <ProfileNavigator />
              </View>
            </View>
          ),
          headerLeft: () => {
            
          }
        }}
      />
      <Stack.Screen
        name="Donor"
        component={Donor}       
      /> 
      <Stack.Screen
        name="Organization"
        component={Organization}       
      />

      <Stack.Screen
        name="Patient"
        component={Patient}       
      />
      <Stack.Screen
        name="More"
        component={More}       
      /> 
      <Stack.Screen
        name="Eligibility"
        component={Eligibility}       
      /> 
      {/*<Stack.Screen
        name="Patient"
        component={Patient}       
      />*/}   
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

