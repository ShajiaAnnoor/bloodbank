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


const donorEntryModal = () => {
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

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius:10,
    margin:10,
    justifyContent:'space-around',
    padding:30,
    width: '100%',
    height: '90%',
    flex: 9,
    alignSelf: 'center',
  },
  buttonOpen: {
    backgroundColor: "teal",
  },
  buttonClose: {
    backgroundColor: "#c71010",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    flexWrap:'wrap',
    padding:1,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
    container: {
    flex: 1,
    backgroundColor: '#eda187',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container2: {
    margin: 50,
    padding: 50,
    backgroundColor: '#eda187',
    width: '90%',
    height: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
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

export default donorEntryModal;