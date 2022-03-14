import React, { 
    useState, 
} from "react";
import { 
    Modal,
    Pressable, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
} from "react-native";

import { Picker } from '@react-native-community/picker';
import { styles } from "./requestOrganizationEntryModal.style";
import { enterOrganizationThunk } from "../redux/thunk/organization";

/*
const App = () => {
const [modalVisible, setModalVisible] = useState(false);
const [organizationName, setOrganizationName] = useState('');
const [address, setAddress] = useState('');
const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");
const [contactNumber, setContactNumber] = useState('');
  
return (
  <View>
    <Modal
      statusBarTranslucent={true}
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>

        <Text style={styles.logo}>
          Make a request for blood
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
            placeholder="Enter Phone Number" 
            placeholderTextColor="#003f5c"
            onChangeText={text => setContactNumber(text)}
          />
        </View>  
          
        <TouchableOpacity 
          style={styles.loginBtn}>
          onPress={() => dispatch(enterOrganizationThunk)}
          <Text style={styles.loginText}>
            Create Entry
          </Text>
        </TouchableOpacity>

        <View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>POST</Text>
          
          </Pressable>
        </View>
      </View>
    </Modal>
    
    <View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>
          Click here to register your organizations
        </Text>
      </Pressable>
    </View>
  </View>
);
};

export default App;
*/
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [organizationName, setOrganizationName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");
  const [contactNumber, setContactNumber] = useState('');
    
  return (
    <View>
      <Modal
        statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>

          <Text style={styles.logo}>
            Make a request for blood
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
              placeholder="Enter Phone Number" 
              placeholderTextColor="#003f5c"
              onChangeText={text => setContactNumber(text)}
            />
          </View>  
            
          <TouchableOpacity 
            style={styles.loginBtn}>
            onPress={() => dispatch(addOrganizationThunk)}
            <Text style={styles.loginText}>
              Create Entry
            </Text>
          </TouchableOpacity>

          <View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>POST</Text>
            
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>
            Click here to register your organizations
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;