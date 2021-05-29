import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';

const requestForBlood= (props) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [reason, setReason] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Make a request for blood
      </Text>

      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Name..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({fullName:text})}
        />
      </View>

      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Address.(eg.Name of hospital).." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({address:text})}
        />
      </View>

      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Why you need blood(eg. operation).." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({reason:text})}
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
        
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>
          Post your request
        </Text>
      </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0bda5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
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

export default requestForBlood;