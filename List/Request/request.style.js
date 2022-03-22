import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 11,
      backgroundColor: '#F7F7F7',
      //backgroundColor: '#eda187',
      marginTop: 5,
      marginBottom:5,
      width: '90%',
      justifyContent: 'space-between',
      alignSelf:'center',
      flexDirection:'column',
    },
  
    ShareButtonContainer: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      //backgroundColor: 'white',
      marginTop: 10,
      marginBottom:10,
      width: '90%',
      justifyContent: 'space-between',
      alignSelf:'flex-start',
      flexDirection:'row',  
    },
  
    modalButtonContainer:{
      //margin: 1,
      paddingTop: 1,
      paddingBottom:7,
      //backgroundColor: '#FAFF',
      width: '90%',
      height: '80%',
      flex:1.4,
      alignSelf: 'center',
      flexDirection: 'column',
      //borderRadius: 50,
    },
  
    container2: {
      //marginTop:1,
      //backgroundColor:'#fccdb8',
      //backgroundColor: '#eda187',
      width: '95%',
      height: '90%',
      flex: 1,
      paddingTop:1,
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      //alignItems:'stretch',
      //alignContent:'space-around',
      //flexBasis:10,
    },
    listItem: {
      marginTop: 5,
      padding:10,
      //backgroundColor: '#FFF',
      //backgroundColor: '#eda187',
      backgroundColor: '#a7d1c9',
      width: '100%',
      height:'10%',
      flex: 1,
      alignSelf: 'center',
      flexDirection: 'column',
      borderRadius: 5,
      justifyContent: 'space-evenly',
    },
  
   
    /*filterContainer: {
      flex: 2,
      padding:2,
      //paddingTop:5,
     // alignItems: "flex-start",
      flexDirection:'row',
      justifyContent: 'space-between',
      marginBottom:5,
      //paddingBottom:2,
      flexWrap:'nowrap',
     // alignContent:'space-around',
    },
    
    filterButton:{
      height:20,
      width:20,
      borderRadius:40,
      //margin:2,
      //padding:2,
      //justifyContent:'center',
      
      backgroundColor:"#4CAF50",
      position:'relative',
      alignItems :'center',
      //elevation:10,
    },*/
  
    filterButton:{
      height:20,
      width:20,
      borderRadius:20,
      //margin:2,
      //padding:2,
      backgroundColor:"#4CAF50",
    },
  
    filterContainer: {
      flex: 1,
      padding:2,
      //backgroundColor:"#4CAF60",
      //paddingTop:5,
     // alignItems: "flex-start",
     //alignSelf: 'center',
      flexDirection:'row',
      justifyContent: 'space-between',
      marginBottom:1,
      //paddingBottom:2,
      flexWrap:'nowrap',
     //alignContent:'space-around',
    },
    
    textStyle:{
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:10,
    
    //color: "white",
    //fontWeight: "bold",
    //textAlign: "center",
    flexWrap:'wrap',
    //marginBottom:5,
    justifyContent:'center',
    padding:4,
    }
  
  });