import React, { 
  useState 
} from 'react';
import { 
    Text,  
    TextInput, 
    TouchableOpacity,
    View
} from 'react-native';
import { Picker } from '@react-native-community/picker';

import { styles } from "./organizationEntry.style";

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
          placeholder="Address (eg.Name of hospital)..." 
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
          placeholder="Enter phone number..." 
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

export default organizationEntry;