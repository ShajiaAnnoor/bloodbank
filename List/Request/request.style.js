import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listContainer: {
      flex: 11,
      backgroundColor: '#F7F7F7',
      //backgroundColor: '#eda187',
      marginTop: 3,
      marginBottom:3,
      width: '98%',
      height:'98%',
      justifyContent: 'space-between',
      alignSelf:'center',
      flexDirection:'column',
    },
    
    itemContainer: {
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-around',
      margin:2,
    },
    ShareButtonContainer: {
      flex: 1,
      backgroundColor: '#F7F7F7',
      //backgroundColor: 'white',
      marginTop:2,
      marginBottom:2,
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
  
    pageContainer: {
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
      marginTop:3,
     // paddingTop:10,
      padding:8,
      margin:6,
      //backgroundColor: '#FFF',
      //backgroundColor: '#eda187',
      backgroundColor: '#a7d1c9',
      width: '100%',
      height:'10%',
      flex: 1,
      alignSelf: 'center',
      flexDirection: 'column',
      borderRadius:20,
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

    listItemTextStyle:{
      fontWeight: 'bold',
      fontSize:14, 
      margin:5, 
      alignContent: 'space-between',
      alignSelf:'center'
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