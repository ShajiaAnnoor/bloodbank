import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  
} from 'react-native';
import { Paragraph } from 'react-native-paper';

import FormModal from '../Forms/requestformmodal';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={{ alignItems: 'flex-start', flex: 1 }}>
        <Paragraph style={{ fontWeight: 'bold',}} >{item.name} </Paragraph>
        <Text style={{ fontWeight: 'bold',}}>{item.bloodGroup} </Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.district}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.area}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.address}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.quantity}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.phone}</Text>
        <Paragraph style={{ fontWeight: 'bold',  }} >{item.reason}</Paragraph>
        
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            color: 'green',
            alignItems: 'flex-start',
          }}>
          Call
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  let state = {
    data: [
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097756',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097757',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097758',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097759',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097760',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097761',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097762',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097763',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097764',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097765',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <FormModal />
      <FlatList       
        numColumns={1}
        style={{ flex: 1 }}
        data={state.data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.phone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60,
   
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 5,
     flexDirection: 'column',
  },
});
