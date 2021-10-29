import React, { 
    useState, 
} from "react";
import { 
    Modal,
    Pressable, 
    StyleSheet, 
    Text, 
    TextInput,
    TouchableOpacity,
    View, 
} from "react-native";
import { Picker } from '@react-native-community/picker';
import { styles } from "./donorEntryModal.style";

const DonorEntryModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [donorName, setDonorName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");
  const [selectedAvailablity,setSelectedAvailablity]= useState('');
  const [selectedReady,setSelectedReady]= useState('');
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
            Enter your information
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
              placeholder="Enter Phone Number" 
              placeholderTextColor="#003f5c"
              onChangeText={text => setContactNumber(text)}
            />
          </View>  
            
          <TouchableOpacity style={styles.loginBtn}>
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

export default DonorEntryModal;