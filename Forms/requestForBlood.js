import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';

const requestForBlood= (props) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [reason, setReason] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");
  
  /*const initialBirthday = [
    { id: "day", value: 16 },
    { id: "month", value: 4 },
    { id: "year", value: 1970 },
  ];

  const [birthday, setBirtday] = useState(initialBirthday);

  const date = [
    { id: "day", label: "a", min: 0, max: 31 },
    { id: "month", label: "b", min: 0, max: 12 },
    { id: "year", label: "c", min: 1900, max: new Date().getFullYear()},
  ];

    <View style={styles.inputView}>
        <Text>Date</Text>
          <NumberPlease
            digits={date}
            values={birthday.toString()}
            onChange={(values) => setBirtday(values)}
          />
      </View>
  
  */


  const [dat,setDate] = React.useState({day:"2016-05-15"});

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
          onChangeText={text => setFullName(text)}
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

      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Why you need blood(eg. operation).." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setReason(text)}
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
      
      <View style={styles.inputView}>
        <DatePicker
          style={{width: 200}}
          date={dat.day}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="1970-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 40
            },
            dateInput: {
              marginLeft: 86
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {setDate({day: date})}}
        />
      </View>  
  
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>
          Post your request
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
    fontSize:30,
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

export default requestForBlood;