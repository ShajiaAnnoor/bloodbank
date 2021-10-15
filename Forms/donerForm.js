import React, { 
  useState 
} from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import { Picker } from '@react-native-community/picker';

import { styles } from "./donorForm.style";

const requestForBlood= (props) => {
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");
  const [selectedAvailablity,setSelectedAvailablity]= useState('');
  const [selectedReady,setSelectedReady]= useState('');
  const [contactNumber, setContactNumber] = useState('');
  

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Donor Detail Entry
      </Text>

      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder=" Donor Name..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => setDonorName(text)}
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

      <View style={styles.inputView}>
        <Picker
          selectedValue={selectedAvailablity}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setSelectedAvailablity(itemValue)}
          style={styles.inputText}
        >
          <Picker.Item label="Available" value="Available" />
          <Picker.Item label="Not Available" value="Not Available" />
        </Picker>
      </View>

      <View style={styles.inputView}>
        <Picker
          selectedValue={selectedReady}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setSelectedReady(itemValue)}
          style={styles.inputText}
        >
          <Picker.Item label="Not yet ready" value="Not yet ready" />
          <Picker.Item label="Ready to donate" value="Ready to donate" />
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

export default requestForBlood;