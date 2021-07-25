import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function BloodRequests() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Blood Requests</Text>
    </View>
  );
}

function Donors() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Blood Doners</Text>
    </View>
  );
}

function BloodOrganizations() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Blood Organizations</Text>
    </View>
  );
}

function Patients() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Patients</Text>
    </View>
  );
}

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
    >
      <Tab.Screen
        name="Blood Requests"
        component={BloodRequests}
        options={{
          tabBarLabel: 'Request Notice',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="notification" size={24} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Blood Doners"
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
        component={BloodOrganizations}
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
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
