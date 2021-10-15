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

import { styles } from './districtModal.style';

const districtEntryModal = ({mv, toggle, setDistrict, index}) => {
  const [yourDistrict, setYourDistrict] = useState(' ');
  
  const handleModalSubmit = () => {
    toggle(index);
    setDistrict(yourDistrict);
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
          Change/Edit your district
        </Text>

        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Your District..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setYourDistrict(text)}
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

export default districtEntryModal;