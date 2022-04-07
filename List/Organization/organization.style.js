import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 12,
      marginTop: 2,
      marginBottom:2,
      width: '100%',
      justifyContent: 'space-between',
      alignSelf:'center',
      flexDirection:'column',
      //backgroundColor:'red'
    },
    filterContainer: {
      flex: 1,
      padding:8,
      alignItems: "flex-start",
      flexDirection:'row',
      justifyContent: 'space-between',
      margin:1,
      flexWrap:"nowrap",
      //backgroundColor:'#fcadb8',
    },
    filterButton:{
      height:50,
      width:10,
      margin:20,
      padding:20,
      backgroundColor:"#4CAF50",
    },
    container2: {
      paddingTop:1,
      //marginTop:3,
     //backgroundColor:'#fccdb5',
      width: '95%',
      height: '90%',
      flex: 1,
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      //alignItems:'stretch',
      //alignContent:'space-around',
      //flexBasis:10,
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
    itemContainer: {
      flex:1,
      flexDirection:'row',
      justifyContent: 'space-around'    
    },
    listItem: {
      margin:10,
      padding:10,
      backgroundColor: '#a7d1c9',
      width: '95%',
      flex: 1,
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
    textStyle:{
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontSize:10,
      flexWrap:'wrap',
      justifyContent:'center',
      padding:4,
      },
  });