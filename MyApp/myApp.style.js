import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
  headerRightStyle: {
    flex:1,
    flexDirection: 'row',
    padding:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight:25,
    width:'80%',
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#a7d1c9',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 5,
    alignItems:'flex-start',
    justifyContent: 'space-between',
  },
  filterContainer: {
    flex: 1,
    paddingTop:39,
    alignItems: "flex-start",
    flexDirection:'row',
    justifyContent: 'space-between',
    margin:2,
  },

  filterButton:{
    height:40,
    width:6,
    margin:30,
    padding:30,
    backgroundColor:"#4CAF50",
  },

  drawerContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 5,
    borderRadius:50,
},
});