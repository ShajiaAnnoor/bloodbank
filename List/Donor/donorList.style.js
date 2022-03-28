import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pageContainer: {
      width: '98%',
      height: '90%',
      flex:1,
      flexDirection:'column',
     // margin:5,
      paddingTop:1,
      alignSelf: 'center',
      //justifyContent: 'space-evenly',
    },
    container: {
      flex: 10,
      backgroundColor: '#F7F7F7',
      marginTop:2,
      marginBottom:2,
    },
    itemContainer: {
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-around',
      margin:2,
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

    listItem: {
      margin: 10,
      padding: 10,
      paddingLeft:40,
      backgroundColor: '#a7d1c9',
      width: '95%',
      flex:1,
      alignSelf: 'center',
      flexDirection: 'column',
      borderRadius: 5,
      alignItems:'flex-start',
      justifyContent: 'space-between',
    },
    
    listItemTextStyle:{
      fontWeight: 'bold',
      fontSize:14, 
      margin:5, 
      alignContent: 'space-between',
      alignSelf:'center'
    },

    filterContainer: {
      flex: 1,
      padding:2,
      flexDirection:'row',
      justifyContent: 'space-between',
      marginBottom:1,
      flexWrap:'nowrap',
    },
    
    allFilterContainer: {
      flex: 1,
      flexDirection:'column',
      marginBottom:8,
    },
    filterButton:{
      height:20,
      width:20,
      borderRadius:20,
      backgroundColor:"#4CAF50",
    },
    textStyle:{
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize:10,
      flexWrap:'wrap',
      justifyContent:'center',
      padding:4,
      }
  });
  