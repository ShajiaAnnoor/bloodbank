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

import { styles } from "./contactNumber.style";

const contactEntryModal = ({mv, toggle, setContact, index}) => {
  const [yourContact, setYourContact] = useState(' ');
  

  const handleModalSubmit = () => {
    toggle(index);
    setContact(yourContact);
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
          Change/Edit your contact
        </Text>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Your Contact..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setYourContact(text)}
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

export default contactEntryModal;