import * as React from 'react';
import { 
  Text, 
  View,
 } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import  Organizations from '../List/organizationList';
import Donors from '../List/donorList';
import  Requests from '../List/requestList';
import Patients from '../List/patientList';

/*function Patients() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Patients</Text>
    </View>
  );
}*/

function More() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>more options</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Blood Requests"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
      options={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Tab.Screen
        name="Blood Requests"
        component={Requests}
        options={{
          tabBarLabel: 'Request Notice',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="notification" size={24} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Blood Donors"
        component={Donors}
        options={{
          tabBarLabel: 'Donors',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person-pin-circle" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Blood Organizations"
        component={Organizations}
        options={{
          tabBarLabel: 'Organizations',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="organization" size={size} color={color}/>
          ),
        }}
      />

       <Tab.Screen
        name="Patients"
        component={Patients}
        options={{
          tabBarLabel: 'Patirnts',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-people-circle" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="more" size={22} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <MyTabs />
  );
}
