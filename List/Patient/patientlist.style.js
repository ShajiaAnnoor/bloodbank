import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pageContainer: {
      flex:1,
      flexDirection:'column',
      margin:5,
      paddingTop:5,
      justifyContent: 'space-evenly',
    },
    container: {
      flex: 10,
      backgroundColor: '#F7F7F7',
      marginTop:10,
      marginBottom:5,
    },
    itemContainer: {
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-around',
      margin:2,
    },
    listItem: {
      margin: 10,
      padding: 10,
      backgroundColor: '#a7d1c9',
      width: '95%',
      flex: 1,
      alignSelf: 'center',
      flexDirection: 'column',
      borderRadius: 5,
      alignItems:'flex-start',
      justifyContent: 'space-between',
    },
    filterContainer: {
      flex: 1,
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

    allFilterContainer: {
      flex: 1,
      //paddingTop:10,
      //alignItems: "flex-start",
      flexDirection:'column',
     //justifyContent: 'space-between',
      marginBottom:8,
      //padding:2,
      //flexWrap:'nowrap',
      //paddingBottom:2,
      //height:10
    },
    filterButton:{
      height:20,
      width:20,
      borderRadius:20,
      margin:2,
      padding:2,
      backgroundColor:"#4CAF50",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      //color: "white",
      //fontWeight: "bold",
      //textAlign: "center",
      flexWrap:'wrap',
      //marginBottom:5,
      padding:1,
    },
  });