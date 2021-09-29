import React,{ 
  useState,
 } from 'react';
import {
  StyleSheet,
  Picker,
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity, 
  Pressable, 
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import OrganizationEntryModal from '../Forms/requestOrganizationEntryModal';
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

function OrganizationList({ item }) {
  return (
    <View style={styles.listItem}>

      <View style={{ alignItems: 'flex-start', flex: 1, }}>
          
        <View style={ styles.itemContainer}>
          <Octicons name="organization" size={24} color="black" />
          <Text style={{ fontWeight: 'bold', marginTop: 7, alignContent: 'space-between'}} > 
            {item.organizationName} 
          </Text>
        </View>
        
        <View style={ styles.itemContainer}>
          <Octicons name="location" size={24} color="black" />
          <Paragraph style={{ fontWeight: 'bold' }}>
            {item.address}
          </Paragraph>
        </View>
        
        <View style={ styles.itemContainer}>
          <MaterialIcons name="location-city" size={24} color="black" />
          <Text style={{ fontWeight: 'bold' }}>
            {item.district}
          </Text>
        </View>

        <View style={ styles.itemContainer}>
          <FontAwesome name="phone-square" size={24} color="black" />
          <Text style={{ fontWeight: 'bold' }}>
            {item.contactNumber}
          </Text>
        </View>
      </View>
      {/*<TouchableOpacity
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
          click here to Call
        </Text>
        </TouchableOpacity>*/}
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

export default function App(){
  let state = {
    data: [
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097752',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097753',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097754',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097755',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Chittagong',
        address: 'Dhaka Medical College',
        contactNumber: '01749097756',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Rangpur',
        address: 'Dhaka Medical College',
        contactNumber: '01749097757',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Sylhet',
        address: 'Dhaka Medical College',
        contactNumber: '01749097758',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Panchagarh',
        address: 'Dhaka Medical College',
        contactNumber: '01749097759',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097750',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097751',
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
  
  
  
  const [selectedValue, setSelectedValue] = useState("one");
    
    const [filteredData, setFilteredData] = useState(state.data);
  
    const onPressDistrict = (itemValue) => {
      const newData = state.data.filter((item) => {
        return item.district == itemValue;
      });
      setFilteredData(newData);
    };
  
    const onPressAll = () => {    
      setFilteredData(state.data);
      //setSelectedValue(itemValue)
    };
  
    const onPickerPress1 = (itemValue) => {
      setSelectedValue(itemValue);
    }
  
  
  
    return (
      <View style={styles.container2}>
      <View >
      <OrganizationEntryModal/>
      </View>

      <View style={styles.filterContainer}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150  }}
          onValueChange={(itemValue, itemIndex) => onPickerPress1(itemValue,itemIndex)}
        >
          {AllDistrict.map((district) => {
            return(
              <Picker.Item label={district} value={district}/>
            );
          })}
        </Picker>

        
        <Button 
          style={styles.filterButton}
          onPress={()=>onPressDistrict(selectedValue)} 
          title="Click" 
          color='#a7d1c9' 
          touchSoundDisabled ="false"
        />

          <Button 
            style={styles.filterButton}
            onPress={()=>onPressAll()} 
            title="See All" 
            color='#a7d1c9' 
            touchSoundDisabled ="false"
          />  

        
    </View>
      <View style={styles.container}>
        <FlatList
          numColumns={1}
          style={{ flex:15,height:"50%", }}
          data={filteredData}
          renderItem={({ item }) => <OrganizationList item={item} />}
          keyExtractor={(item) => item.contactNumber}
        />
      </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 12,
    //backgroundColor: '#eda187',
    marginTop: 5,
    marginBottom:10,
    width: '100%',
    justifyContent: 'space-evenly',
    alignSelf:'center',
    flexDirection:'column',
  },

  filterContainer: {
    flex: 1,
    padding:10,
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
    

  },

  container2: {
    
    marginTop:10,
   // backgroundColor:'#fccdb8',
    width: '95%',
    height: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems:'stretch',
    alignContent:'space-around',
    flexBasis:10,
  },

  itemContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-around'
    
  },
  listItem: {
    margin:10,
    padding:10,
    backgroundColor: '#a7d1c9',
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 5,
    alignItems:'flex-start',
    justifyContent: 'space-between',
  },
  textStyle:{
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:10,
    
    //color: "white",
    //fontWeight: "bold",
    //textAlign: "center",
    flexWrap:'wrap',
    //marginBottom:5,
    justifyContent:'center',
    padding:4,
    },
});

