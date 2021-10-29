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
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097757',
        bloodGroup:'B+',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097758',
        bloodGroup:'B+',
      },
      {
        name:'Jamal Hossain',
        address: 'Dhaka Medical College',
        district: 'Chittagong',
        contactNumber: '01749097759',
        bloodGroup:'AB-',
      },
      {
        name:'Jamal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097759',
        bloodGroup:'AB-',
      },
      {
        name:'Jamal Hossain',
        address: 'Dhaka Medical College',
        district: 'Barishal',
        contactNumber: '01749097759',
        bloodGroup:'AB-',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749097723',
        bloodGroup:'AB+',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749077756',
        bloodGroup:'O-',
      },      
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Barishal',
        contactNumber: '01749097762',
        bloodGroup:'O+',
      },
      {
       name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749337756',
        bloodGroup:'B+',
      },
      {
        name:'Kalmal Hossain',
        address: 'Dhaka Medical College',
        district: 'Dhaka',
        contactNumber: '01749092256',
        bloodGroup:'A+',
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
            <FontAwesome name="phone-square" size={24} color="black" />
            <Text style={{ fontWeight: 'bold',margin:5 }}>
              {item.contactNumber}
            </Text>
          </View>

          <View style={ styles.itemContainer}>
            <FontAwesome name="phone-square" size={24} color="black" />
            <Text style={{ fontWeight: 'bold',margin:5 }}>
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
      <View >
      <PatientEntryModal/>
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
            renderItem={({ item }) => <PatientList item={item} />}
            keyExtractor={( item ) => item.email}
          />
        </View>
      </View>
    );
  }
  
  
  