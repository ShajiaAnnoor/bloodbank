import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   
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