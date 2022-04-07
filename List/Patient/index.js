import React,{ 
    useState,
   } from 'react';
  import {
    Button,
    FlatList,
    Picker,
    Pressable,
    Text,
    View, 
  } from 'react-native';
  import { Paragraph } from 'react-native-paper';
  import { Octicons } from '@expo/vector-icons';
  import { MaterialIcons } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
  import { Ionicons } from '@expo/vector-icons';

  import { styles } from "./patientlist.style";
  import PatientEntryModal from '../../Forms/patientEntryModal';
  import call from 'react-native-phone-call';

  const triggerCall = (item) => {
    // Check for perfect 10 digit length
    const args = {
      number: item.contactNumber,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  let all_data = {
    data: [
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097756',
        bloodGroup:'B-',
        email: '1@bb.com',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097757',
        bloodGroup:'B+',
        email: '2@bb.com',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097758',
        bloodGroup:'B+',
        email: '3@bb.com',
      },
      {
        name:'Jamal Hossain',
        address: 'Dhaka Medical College',
        district: 'Chittagong',
        contactNumber: '01749097759',
        bloodGroup:'AB-',
        email: '4@bb.com',
      },
      {
        name:'Jamal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097759',
        bloodGroup:'AB-',
        email: '5@bb.com',
      },
      {
        name:'Jamal Hossain',
        address: 'Dhaka Medical College',
        district: 'Barishal',
        contactNumber: '01749097759',
        bloodGroup:'AB-',
        email: '6@bb.com',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097723',
        bloodGroup:'AB+',
        email: '7@bb.com',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749077756',
        bloodGroup:'O-',
        email: '8@bb.com',
      },      
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Barishal',
        contactNumber: '01749097762',
        bloodGroup:'O+',
        email: '9@bb.com',
      },
      {
       name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749337756',
        bloodGroup:'B+',
        email: '10@bb.com',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749092256',
        bloodGroup:'A+',
        email: '11@bb.com',
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
  
  function PatientList({ item }) {
    return (
      <View style={styles.listItem}>
  
        <View style={{ alignItems: 'flex-start', flex: 1, }}>
            
          <View style={ styles.itemContainer}>
            <Ionicons name="person-circle" size={24} color="black" />
            <Text style={styles.listItemTextStyle} > 
              {item.name} 
            </Text>
          </View>
          
          <View style={ styles.itemContainer}>
            <Octicons name="location" size={24} color="black" />
            <Paragraph style={styles.listItemTextStyle} >
              {item.address}
            </Paragraph>
          </View>
          
          <View style={ styles.itemContainer}>
            <MaterialIcons name="location-city" size={24} color="black" />
            <Text style={styles.listItemTextStyle} >
              {item.district}
            </Text>
          </View>
   
          <View style={ styles.itemContainer}>
            <FontAwesome name="phone-square" size={24} color="black" />
            <Text style={styles.listItemTextStyle} >
              {item.contactNumber}
            </Text>
          </View>

          <View style={ styles.itemContainer}>
            <FontAwesome name="phone-square" size={24} color="black" />
            <Text style={styles.listItemTextStyle} >
              {item.bloodGroup}
            </Text>
          </View>
        </View>
       
        <Pressable 
          style ={{
            height: 40,
            width:40,
            borderRadius:5,
            backgroundColor : "#a6020d",
            marginTop :5,
            marginBottom:5,
            elevation: 10,
          }}
          onPress={()=>triggerCall(item)}
        >
          <Text style={styles.textStyle}>CAll</Text>
        </Pressable>
      </View>
    );
  }
  
  export default function App() {
    
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  
    const [filteredData, setFilteredData] = useState(all_data.data);

    const onPressAll = () => {    
      setFilteredData(all_data.data);
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
      <View style={styles.modalButtonContainer}>
      <PatientEntryModal/>
      </View>

        <View style={styles.filterContainer}>
          <Picker
            selectedValue={selectedDistrict}
            style={{ height: 50, width: 150, margin:1,padding:1,}}
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
            style={{ height: 50, width: 150, margin:1,padding:1, }}
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
        <View style={styles.listContainer}>
          <FlatList
            style={{ flex: 10, }}
            data={filteredData} 
            renderItem={({ item }) => <PatientList item={item} />}
            keyExtractor={( item ) => item.email}
          />
        </View>
      </View>
    );
  }
  
  
  