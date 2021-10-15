import React, { 
    useState, 
} from "react";
import { 
    Alert, 
    Modal,
    Pressable, 
    Text, 
    View, 
    TextInput,
} from "react-native";

import { styles } from "./nameModal.style";

const nameEntryModal = ({mv, toggle, setName, index}) => {
  const [yourName, setYourName] = useState(' ');
  const [myName, setMyName] = useState('B'); 

  const handleModalSubmit = () => {
    toggle(index);
    setName(yourName);
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
          Change/Edit your name
        </Text>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Your Name..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setYourName(text)}
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

export default nameEntryModal;