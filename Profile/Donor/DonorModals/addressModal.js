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
} from "react-native";

const addressEntryModal = ({mv, toggle,setAddress,index}) => {
 
  const [yourAddress, setYourAddress] = useState(' ');
 
  const handleModalSubmit = () => {
    toggle(index);
    setAddress(yourAddress);
  }
    
  return (     
        <Modal
          statusBarTranslucent={true}
          animationType="fade"
          transparent={true}
          visible={mv}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >

          <View style={styles.modalView}>
            <Text style={styles.logo}>
              Change/Edit your address
            </Text>

            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Your Address..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => setYourAddress(text)}
              />
            </View>
          
            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                 onPress={handleModalSubmit}
              >
                <Text style={styles.textStyle}>POST</Text>
            </Pressable>
          </View>
        </View>
      </Modal>      
  );
};

export default addressEntryModal;