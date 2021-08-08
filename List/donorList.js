import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,  
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//import { LoginManager } from "react-native-fbsdk-next";


//import LoginButton from "./facebookLogin";
//import {LogManager} from './facebookLoginManager';

function OrganizationList({ item }) {
  return (
    <View style={styles.listItem}>

      <View style={{ alignItems: 'flex-start', flex: 1, }}>
          
        <View style={ styles.itemContainer}>
          <Ionicons name="person-circle" size={24} color="black" />
          <Text style={{ fontWeight: 'bold', margin:5, alignContent: 'space-between'}} > 
            {item.name} 
          </Text>
        </View>
        
        <View style={ styles.itemContainer}>
          <Octicons name="location" size={24} color="black" />
          <Paragraph style={{ fontWeight: 'bold',margin: 5 }}>
            {item.address}
          </Paragraph>
        </View>
        
        <View style={ styles.itemContainer}>
          <MaterialIcons name="location-city" size={24} color="black" />
          <Text style={{ fontWeight: 'bold',margin: 5 }}>
            {item.district}
          </Text>
        </View>

        <View style={ styles.itemContainer}>
          <Entypo name="compass" size={24} color="black" />
          <Text style={{ fontWeight: 'bold',margin:5 }}>
            {item.availablity}
          </Text>
        </View>

        <View style={ styles.itemContainer}>
          <MaterialIcons name="event-available" size={24} color="black" />
          <Text style={{ fontWeight: 'bold',margin:5 }}>
            {item.status}
          </Text>
        </View>

        <View style={ styles.itemContainer}>
          <FontAwesome name="phone-square" size={24} color="black" />
          <Text style={{ fontWeight: 'bold',margin:5 }}>
            {item.contactNumber}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent:'flex-start',
          alignItems: 'flex-start',
          marginTop :8,
        }}>
        <Text
          style={{
            color: 'green',
            justifyContent:'flex-start',
            alignItems: 'flex-start',
            
          }}>
          Call
        </Text>
      </TouchableOpacity>
       
      </View>
  );
}

export default class App extends React.Component {
  state = {
    data: [
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Available',
        status:'Ready to donate',
        contactNumber: '01749097756',
      },
      {
         name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Not Available',
        status:'Not yet Ready',
        contactNumber: '01749097756',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Available',
        status:'Ready to donate',
        contactNumber: '01749097756',
      },
      {
        name:'Jamal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Available',
        status:'Ready to donate',
        contactNumber: '01749097756',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Available',
        status:'Ready to donate',
        contactNumber: '01749097756',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Available',
        status:'Ready to donate',
        contactNumber: '01749097756',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097756',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Available',
        status:'Ready to donate',
        contactNumber: '01749097756',
      },
      {
       name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Available',
        status:'Ready to donate',
        contactNumber: '01749097756',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        availablity: 'Available',
        status:'Ready to donate',
        contactNumber: '01749097756',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1, }}
          data={this.state.data}
          renderItem={({ item }) => <OrganizationList item={item} />}
          keyExtractor={(item) => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
  },
  itemContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around',
    margin:2,
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
});
