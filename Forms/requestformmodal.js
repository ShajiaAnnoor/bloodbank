import React, { 
    useState, 
} from "react";
import { 
    Modal,
    Pressable, 
    Text, 
    TextInput,
    View, 
} from "react-native";
import { Picker } from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';

import { styles } from "./requestFormModal.style";

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
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.logo}>
            Make a Request for Blood
          </Text>

          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Name" 
              placeholderTextColor="#003f5c"
              onChangeText={text => setFullName(text)}
            />
          </View>

          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Address (eg: Name of hospital)" 
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
      <View >
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Click here to make a request for blood</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default App;