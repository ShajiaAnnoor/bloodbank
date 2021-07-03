import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  
} from 'react-native';
import { Paragraph } from 'react-native-paper';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={{ alignItems: 'left', flex: 1 }}>
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
          justifyContent: 'left',
          alignItems: 'left',
        }}>
        <Text
          style={{
            color: 'green',
            justifyContent: 'left',
            alignItems: 'left',
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
        name:'Name : Miyah Myles ',
        bloodGroup: 'BloodGroup : A+',
        district: 'District : Dhaka',
        quantity: 'Quantity of blood : 3 bag',
        address: 'Address : Square Hospital',
        area:'Area : Dhanmondi',
        reason: 'Reason : Open heart surgery',
        phone: 'Contact number: 01749097756',


      },
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
        phone: '01749097756',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
         
          numColumns={1}
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
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
