import React,{ 
  useState,
 } from 'react';
import {
  Button,
  FlatList,
  Picker,
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
//import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

//import { LoginManager } from "react-native-fbsdk-next";
//import LoginButton from "./facebookLogin";
//import {LogManager} from './facebookLoginManager';
let all_data = {
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
      contactNumber: '01749097757',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097758',
    },
    {
      name:'Jamal Hossain',
      address: 'Dhaka Medical College',
      district: 'Chittagong',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097759',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097723',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749077756',
    },
    {
      organizationName:'Sandhani Dhaka Medical College',
      district: 'Barishal',
      address: 'Dhaka Medical College',
      contactNumber: '01749097792',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Barishal',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097762',
    },
    {
     name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749337756',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749092256',
    },
  ],
};

const AllValue =[
  'Dhaka',
  'Chittagong',
  'Barishal',
  'Rajshahi',
  'Mymensingh',
  'Rangpur',
  'Sylhet',
  'Panchagarh',
];

function DonorList({ item }) {
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

export default function App() {
  
  const [selectedValue, setSelectedValue] = useState("one");
  
  const [filteredData, setFilteredData] = useState(all_data.data);

  const onPress = (itemValue) => {
    const newData = all_data.data.filter((item) => {
      return item.district == itemValue;
    });
    setFilteredData(newData);
  };

  const onPressAll = () => {    
    setFilteredData(all_data.data);
    //setSelectedValue(itemValue)
  };

  const onPickerPress = (itemValue) => {
    setSelectedValue(itemValue);
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.filterContainer}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150  }}
          onValueChange={(itemValue, itemIndex) => onPickerPress(itemValue,itemIndex)}
        >
          {AllValue.map((district) => {
            return(
              <Picker.Item label={district} value={district}/>
            );
          })}
        </Picker>

        

        {/*<TouchableOpacity
          style={{height:50,width:50, alignItems:'center',Color:'#a7d1c9',}}
          onPress={()=>onPress(selectedValue)} 
        >
        
          <Text
            style={{
              color: 'red',
              alignItems: 'flex-start',
              
            }}>
            FilterIn
          </Text>

          </TouchableOpacity>*/}

        <Button 
          style={styles.filterButton}
          onPress={()=>onPress(selectedValue)} 
          title="Click" 
          color='#a7d1c9' 
          touchSoundDisabled ="false"
        />

        <TouchableOpacity
            style={{height:50,width:50, alignItems:'center'}}
            onPress={()=>onPressAll()} 
          >
          
          <Text
            style={{
              color: 'green',
              alignItems: 'flex-start',
              
            }}>
            FilterOut
          </Text>
        </TouchableOpacity>
        
    </View>

      <View style={styles.container}>
        {/* <FlatList data={filteredData} renderItem={({item}) => <Text>{item}</Text>} />*/}
        <FlatList
          style={{ flex: 10, }}
          data={filteredData} 
          renderItem={({ item }) => <DonorList item={item} />}
          keyExtractor={( item ) => item.email}
        />
       {/*} <Button 
          onPress={()=>onPress(selectedValue)} 
          title="Click here to filter" 
          color="#841584" 
        />
        <Button 
          onPress={()=>onPressAll()} 
          title="Click here to see all" 
          color="#841533" 
        />*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex:1,
    flexDirection:'column',
    marginTop:30,
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 10,
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
  filterContainer: {
    flex: 1,
    paddingTop:39,
    alignItems: "flex-start",
    flexDirection:'row',
    justifyContent: 'space-between',
    margin:2,
  },

  filterButton:{
    height:50,
    width:10,
    margin:20,
    padding:20,
    backgroundColor:"#4CAF50",
    

  }
});
