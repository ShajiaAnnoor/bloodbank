import React,{ 
  useEffect,
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
import { State } from 'react-native-gesture-handler';
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
      bloodGroup: 'A+',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Not Available',
      status:'Not yet Ready',
      contactNumber: '01749097757',
      bloodGroup: 'A-',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097758',
      bloodGroup: 'B+',
    },
    {
      name:'Jamal Hossain',
      address: 'Dhaka Medical College',
      district: 'Chittagong',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097759',
      bloodGroup: 'B-',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097723',
      bloodGroup: 'AB+',

    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749077756',
      bloodGroup: 'AB-',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Barishal',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097762',
      bloodGroup: 'O+',
    },
    {
     name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749337756',
      bloodGroup: 'O+',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749092256',
      bloodGroup: 'A+',
    },
  ],
};

const AllDistrict =[
  'Dhaka',
  'Chittagong',
  'Barishal',
  'Rajshahi',
  'Mymensingh',
  'Rangpur',
  'Sylhet',
  'Panchagarh',
];

const AllBloodGroup=[
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
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

        <View style={ styles.itemContainer}>
          <MaterialIcons name="event-available" size={24} color="black" />
          <Text style={{ fontWeight: 'bold',margin:5 }}>
            {item.bloodGroup}
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
  
  useEffect(()=> {
    dispatch(donorListThunk);
  })

  //const [selectedValue, setSelectedValue] = useState("one");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");

  const [filteredData, setFilteredData] = useState(donorList);
  const { donorList } = useSelector( state => state.donorList.donorList );

  {/*const onPressDistrict = (itemValue) => {
    const newData = donorList.filter((item) => {
      return item.district == itemValue;
    });
    setFilteredData(newData);
  };*/}

  const onPressAll = () => {    
    setFilteredData(donorList);
    //setSelectedValue(itemValue)
  };

  const onPickerPress1 = (itemValue) => {
    setSelectedDistrict(itemValue);
  }

  const onPickerPress2 = (itemValue) => {
    setSelectedBloodGroup(itemValue);
  }

  const onPressBoth = (district, bloodgroup) => {
    const newData = donorList.filter((item) => {
      if( district == "" ) return true ; 
      return item.district == district;
    });

    const finalData = newData.filter((item) => {
      if( bloodgroup == "" ) return true ; 
      return item.bloodGroup == bloodgroup;
    })
    setFilteredData(finalData);
  }

  {/*const onPressGroup = (itemValue) => {
    const newData = donorList.filter((item) => {
      return item.bloodGroup == itemValue;
    });
    setFilteredData(newData);
  };



  const onPressAllGroup= () => {    
    setFilteredData(donorList);
    //setSelectedValue(itemValue)
  };*/}

  return (
    <View style={styles.pageContainer}>
      {/*<View style={styles.allFilterContainer}>*/}
      <View style={styles.filterContainer}>
          <Picker
            selectedValue={selectedDistrict}
            style={{ height: 50, width: 150, margin:2,padding:2,}}
            onValueChange={(itemValue, itemIndex) => onPickerPress1(itemValue,itemIndex)}
          >
            {AllDistrict.map((district) => {
              return(
                <Picker.Item label={district} value={district}/>
              );
            })}
          </Picker>

          <Picker
            selectedValue={selectedBloodGroup}
            style={{ height: 50, width: 150  }}
            onValueChange={(itemValue, itemIndex) => onPickerPress2(itemValue,itemIndex)}
          >
            {AllBloodGroup.map((bloodGroup) => {
              return(
                <Picker.Item label={bloodGroup} value={bloodGroup}/>
              );
            })}
          </Picker>
          
      </View>

      <View style={styles.filterContainer}>
          <Button 
            style={styles.filterButton}
            onPress={()=>onPressBoth(selectedDistrict,selectedBloodGroup)} 
            title="Apply Filter" 
            color='#a7d1c9' 
            touchSoundDisabled ="false"
          />

            <Button 
              style={styles.filterButton}
              onPress={()=>onPressAll()} 
              title="See Full List" 
              color='#a7d1c9' 
              touchSoundDisabled ="false"
            />  
          
      </View>
   {/*</View>*/}

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
    margin:5,
    paddingTop:5,
    //marginTop:1,
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 10,
    backgroundColor: '#F7F7F7',
    //marginTop: 60,
    marginTop:10,
    marginBottom:5,
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
    padding:2,
    //paddingTop:5,
   // alignItems: "flex-start",
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:5,
    //paddingBottom:2,
    flexWrap:'nowrap',
   // alignContent:'space-around',
  },

  allFilterContainer: {
    flex: 1,
    //paddingTop:10,
    //alignItems: "flex-start",
    flexDirection:'column',
   //justifyContent: 'space-between',
    marginBottom:8,
    //padding:2,
    //flexWrap:'nowrap',
    //paddingBottom:2,
    //height:10
  },

  filterButton:{
    height:20,
    width:20,
    borderRadius:20,
    //margin:2,
    //padding:2,
    backgroundColor:"#4CAF50",
  }
});
