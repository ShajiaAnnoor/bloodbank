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
      margin:1,
      justifyContent:'space-around',
      padding: 20,
      width: '100%',
      height: '90%',
      flex:9,
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