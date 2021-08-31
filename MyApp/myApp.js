import React, {
  useState,
  Fragment,
} from 'react';
import {
  Button,
  Image,
  Switch,
  View,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MyTab from '../MyApp/MyTab';
import ProfileNavigator from '../Profile/ProfileNavigatorButton/profileNavigatorButton.js'
//import Patient from "../Profile/Patient/PatientProfile/PatientProfile";
import Donor from "../Profile/Donor/DonorProfile/donorProfile";
import Organization from "../Profile/Organization/OrganizationProfile/OrganizationProfile";


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

const styles = StyleSheet.create({
  headerRightStyle: {
    flex:1,
    flexDirection: 'row',
    padding:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight:25,
    width:'80%',
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#a7d1c9',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 5,
    alignItems:'flex-start',
    justifyContent: 'space-between',
  },
  filterContainer: {
    flex: 1,
    paddingTop:39,
    alignItems: "flex-start",
    flexDirection:'row',
    justifyContent: 'space-between',
    margin:2,
  },

  filterButton:{
    height:40,
    width:6,
    margin:30,
    padding:30,
    backgroundColor:"#4CAF50",
  },

  drawerContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 5,
    borderRadius:50,
},
});