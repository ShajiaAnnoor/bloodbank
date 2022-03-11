import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,  
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import OrganizationEntryModal from '../Forms/requestOrganizationEntryModal';

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
          click here to Call
        </Text>
      </TouchableOpacity>
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
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097756',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097757',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
        address: 'Dhaka Medical College',
        contactNumber: '01749097758',
      },
      {
        organizationName:'Sandhani Dhaka Medical College',
        district: 'Dhaka',
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

  useEffect(()=>{
    //api call will be made by dispatching thunks
    dispatch(fetchOrganizationListThunk)

    return function cleanup() {

    }

  });
  

  const filteredData = useSelector(getOrganizatonList);

    return (
      <View style={styles.container2}>
        <View>
          <OrganizationEntryModal/>
        </View>
        <View style={styles.container}>
          <FlatList
            numColumns={1}
            style={{ flex: 15 }}
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
    backgroundColor: '#eda187',
    marginTop: 10,
    marginBottom:10,
    width: '90%',
    justifyContent: 'space-evenly',
    alignSelf:'center',
    flexDirection:'column',
  },

  container2: {
    
    marginTop:10,
    backgroundColor:'#fccdb8',
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

