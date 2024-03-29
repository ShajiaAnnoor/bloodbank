import React, { useState, Fragment } from "react";
import { 
  View,
  Button, 
  Switch, 
  StyleSheet,
  Text,
} from "react-native";
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import NameEntryModal from '../DonorModals/nameModal';
import AddressEntryModal from '../DonorModals/addressModal';
import DistrictEntryModal from '../DonorModals/districtModal';
import ContactEntryModal from '../DonorModals/contactModal';

const DonorProfile = () => {
  const arr = [false,false,false,false];
  const[myName, setMyName] = useState("");
  const[myAddress, setMyAddress] = useState("");
  const[myDistrict, setMyDistrict] = useState("");
  const[myContact, setMyContact] = useState("");
  const[status, setStatus] = useState("Ready");
  const [isEnabled, setIsEnabled] = useState(false);
  const [isReadyEnabled, setIsReadyEnabled] = useState(false);
  const[ modalVisible, setModalVisible] = useState(arr);
  const[tmpToggle,setTmpToggle] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => {
    return !previousState; 
  })
  const toggleReadySwitch = () => setIsReadyEnabled(previousState => !previousState);
  const toggleModalVisiblity = (i) => setModalVisible(previousState => {
    let newArr = [];

    for (var j of previousState) {
      newArr.push(j);
    }

    if( newArr[ i ] == false ) {
      newArr[ i ] = true ; 
    } else {
      newArr[ i ] = false ; 
    }
    return newArr ;
  })

  const toggleEverything = () => {
    toggleReadySwitch();
    if( status === "Ready" ) {
      setStatus("Not Ready");
    } else {
      setStatus("Ready");
    }
  }

  let text;
    
  if (isEnabled) {      
    text = <Text>Not Available</Text>;    
  } else {      
    text = <Text>Available</Text>;    
  }
  return (
    <Fragment>
       <NameEntryModal mv={modalVisible[0]} toggle={toggleModalVisiblity} setName={setMyName} index={0}/>
       <AddressEntryModal mv={modalVisible[1]} toggle={toggleModalVisiblity} setAddress={setMyAddress} index={1}/>
        <DistrictEntryModal mv={modalVisible[2]} toggle={toggleModalVisiblity} setDistrict={setMyDistrict} index={2}/>
         <ContactEntryModal mv={modalVisible[3]} toggle={toggleModalVisiblity} setContact={setMyContact} index={3}/>
    <View style={styles.container1}>
      <View style={styles.itemContainer2}>
        <Ionicons name="person-circle" size={24} color="black" />
        <Text>{myName}</Text>
        <Button title="edit me" onPress={()=>toggleModalVisiblity(0)}/>
      </View>

      <View style={styles.itemContainer2}>
        <Octicons name="location" size={24} color="black" />
        <Text>{myAddress}</Text>
        <Button title="Edit" onPress={()=>toggleModalVisiblity(1)}/>
      </View>

      <View style={styles.itemContainer2}>
        <Octicons name="location" size={24} color="black" />
        <Text>{myDistrict}</Text>
        <Button title="Edit" onPress={()=>toggleModalVisiblity(2)}/>
      </View>

      <View style={styles.itemContainer2}>
       
        <FontAwesome name="phone-square" size={24} color="black" />
        <Text>{myContact}</Text>
        <Button title="Edit" onPress={()=>toggleModalVisiblity(3)}/>
        
      </View>   
     
      <View style={styles.itemContainer2}>

        <Entypo name="compass" size={24} color="black" />
        
          {text}
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

       <View style={styles.itemContainer2}>
        
        <MaterialIcons style={{alignItems:"space-around"}} name="event-available" size={25} color="black" />
        
        <Text>{status}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isReadyEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleEverything}
          value={isReadyEnabled}
        />
      </View>

        
    </View>
  </Fragment>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",  
  },

  itemContainer2: {
    flexDirection:'row',
    justifyContent: 'space-around',
    height:"10%",
    width:"80%",
    backgroundColor:"#ebd8d9",
    margin:10,
    alignItems:"center",
  },
});

export default DonorProfile;