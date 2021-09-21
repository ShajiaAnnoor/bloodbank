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
    padding: 30,
    elevation: 2,
    width: '90%',
    alignSelf:'center',
     margin:10,
    justifyContent:'space-around',
  },
  buttonOpen: {
    backgroundColor: "#c71010",
  },
  buttonClose: {
    backgroundColor: "#c71010",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
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
});

export default districtEntryModal;