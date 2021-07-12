import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Picker} from '@react-native-community/picker';

const organizationEntry= (props) => {
  const [organizationnameName, setOrganizationName] = useState('');
  const [address, setAddress] = useState('');
  const [district, setSelectedDistrict] = useState("Dhaka");
  const [contactNumber, setContactNumber] = useState('');
  
  return (
    <View style={styles.container}>
  
      <Text style={styles.logo}>
        Organization Details Form
      </Text>

      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder=" Organization Name..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setOrganizationName(text)}
        />
      </View>

      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Address.(eg.Name of hospital).." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setAddress(text)}
        />
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={selectedDistrict}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setSelectedDistrict(itemValue)}
          style={styles.inputText}
        >
          <Picker.Item label="Barishal" value="Barishal" />
          <Picker.Item label="Dhaka" value="Dhaka" />
        </Picker>
      </View>
      
    <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder=" enter phone number..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setContactNumber(text)}
        />
      </View>  
        
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>
          Create Entry
        </Text>
      </TouchableOpacity>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0bda5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:20,
    color:"#590208",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#ebd8d9",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#590208",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});

export default organizationEntry;