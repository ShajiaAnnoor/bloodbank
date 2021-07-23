import React, { 
    useState, 
} from "react";
import { 
    Alert, 
    Modal,
    Pressable, 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity
} from "react-native";
import { Picker } from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [reason, setReason] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState("Dhaka");
  const [dat,setDate] = React.useState({day:"2016-05-15"});  

  return (
    <View>
      <Modal
        statusBarTranslucent={true}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
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
          <View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>POST</Text>
            </Pressable>
          </View>
        </View>
      
       {/*<View style={styles.centeredView}>
          <View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>POST</Text>
            </Pressable>
          </View>
          </View>*/}
      </Modal>
      <View style={styles.container2}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
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
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
    container: {
    flex: 1,
    backgroundColor: '#f0bda5',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  modalButtonContainer:{
    margin: 2,
    padding: 20,
    backgroundColor: '#FFF',
    width: '80%',
    height: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 80,
  },
  container2: {
    margin: 50,
    padding: 50,
    backgroundColor: '#FFF',
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

export default App;