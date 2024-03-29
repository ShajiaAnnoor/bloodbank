import React,{ 
  useState,
 } from 'react';
import {
  Button,
  FlatList,
  Picker,
  Text,
  View, 
  Pressable,
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DonorEntryModal from '../../Forms/donorEntryModal';
import call from 'react-native-phone-call';
import { useSelector } from 'react-redux';
import { fetchDonorListThunk } from '../../redux/thunk/donor';
import {getDonorList} from '../../redux/reducer/donor';
import { styles } from "./donorList.style";

const triggerCall = (item) => {
  // Check for perfect 10 digit length
  const args = {
    number: item.contactNumber,
    prompt: true,
  };
  // Make a call
  call(args).catch(console.error);
};
//import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

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
      email: '1@bb.com',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Not Available',
      status:'Not yet Ready',
      contactNumber: '01749097757',
      bloodGroup: 'A-',
      email: '2@bb.com',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097758',
      bloodGroup: 'B+',
      email: '3@bb.com',
    },
    {
      name:'Jamal Hossain',
      address: 'Dhaka Medical College',
      district: 'Chittagong',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097759',
      bloodGroup: 'B-',
      email: '4@bb.com',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097723',
      bloodGroup: 'AB+',
      email: '5@bb.com',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749077756',
      bloodGroup: 'AB-',
      email: '6@bb.com',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Barishal',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749097762',
      bloodGroup: 'O+',
      email: '7@bb.com',
    },
    {
     name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749337756',
      bloodGroup: 'O+',
      email: '8@bb.com',
    },
    {
      name:'Kalmal Hossain',
      address: 'Dhaka Medical College',
      district: 'Dhaka',
      availablity: 'Available',
      status:'Ready to donate',
      contactNumber: '01749092256',
      bloodGroup: 'A+',
      email: '9@bb.com',
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
      <Pressable 
                style ={{
                    height: 40,
                    width:60,
                    borderRadius:5,
                    backgroundColor : "#a6020d",
                    marginTop :5,
                    marginBottom:5,
                    elevation: 10,
                }}
                onPress={()=>triggerCall(item)}
                >
           <Text style={styles.textStyle}>CALL</Text>
        </Pressable>
    </View>
  );
}

export default function App() {
  
  const [selectedValue, setSelectedValue] = useState("one");
  
  useEffect(()=>{
    //api call will be made by dispatching thunks
    dispatch(fetchDonorListThunk)

    return function cleanup() {

    }

  })
  //const [filteredData, setFilteredData] = useState(all_data.data);
  const filteredData = useSelector(getDonorList);

  const onPress = (itemValue) => {
    dispatch(setDonorDistrictFilter(itemValue))
    /*
    const newData = all_data.data.filter((item) => {
      return item.district == itemValue;
    });
    setFilteredData(newData);
    */
  };

  const onPressAll = () => {    
    dispatch(setDonorDistrictFilter(""));
    //setSelectedValue(itemValue)
  };

  const onPickerPress1 = (itemValue) => {
    setSelectedDistrict(itemValue);
  }

  const onPickerPress2 = (itemValue) => {
    setSelectedBloodGroup(itemValue);
  }

  const onPressBoth = (district, bloodgroup) => {
    const newData = all_data.data.filter((item) => {
      if( district == "" ) return true ; 
      return item.district == district;
    });

    const finalData = newData.filter((item) => {
      if( bloodgroup == "" ) return true ; 
      return item.bloodGroup == bloodgroup;
    })
    setFilteredData(finalData);
  }

  return (
    <View style={styles.pageContainer}>

      <View >
        <DonorEntryModal/>
      </View>

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

      <View style={styles.container}>
        <FlatList
          style={{ flex: 10, }}
          data={filteredData} 
          renderItem={({ item }) => <DonorList item={item} />}
          keyExtractor={( item ) => item.email}
        />
      </View>
    </View>
  );
}

