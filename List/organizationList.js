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

function organizationList({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={{ alignItems: 'left', flex: 1 }}>
          

        <Text style={{ fontWeight: 'bold',}} >{item.organizationName} </Text>
        <Paragraph style={{ fontWeight: 'bold',  }} >{item.address}</Paragraph>
        <Text style={{ fontWeight: 'bold',  }} >{item.district}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.contactNumber}</Text>
        
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

export default class organizationList extends React.Component {
  state = {
    data: [
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
        contactNumber: '01749097756',
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
        contactNumber: '01749097756',
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
        contactNumber: '01749097756',
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
        contactNumber: '01749097756',
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
        contactNumber: '01749097756',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
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
  },
});

