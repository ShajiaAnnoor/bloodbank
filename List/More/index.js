import React from 'react';
import { 
  SafeAreaView, 
  View, 
  FlatList, 
  StyleSheet, 
  Text, 
  StatusBar, 
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import More from './more';
import { useNavigation } from '@react-navigation/native';


const DATA = [
  {
    id: 'AA',
    title: 'First Item',
  },
  {
    id: 'BB',
    title: 'Second Item',
  },
  {
    id: 'CC',
    title: 'Third Item',
  },
  {
    id: 'DD',
    title: 'First Item',
  },
  {
    id: 'EE',
    title: 'Second Item',
  },
  {
    id: 'FF',
    title: 'Third Item',
  },
];

const Item = ({ id, title }) => {
const navigation = useNavigation();
 return(   
  <View style={styles.item}>
  <MaterialIcons name="location-city" size={24} color="black" />
    <TouchableOpacity
        style={styles.button}
        onPress={()=>onclick_item(id, navigation)}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>);
};

const onclick_item = (id, navigation) => {
  //let key = id
  console.log("here");
  console.log(id);
  if(id == 'AA')
  {
    navigation.navigate('More');
    console.log("AA");
  }
  else if(id == 'BB')
  {
    // navigate to page 2
     navigation.navigate('More');
     console.log("BB");
  }
  else if(id == 'CC')
  {
    // navigate to page 3
     navigation.navigate('More');
  }
}

const App = () => {
  //const navigation = useNavigation();
//console.log(navigation);
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        showSeparator
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height:'90%',
    width:'45%',
    padding: 40,
    marginVertical: 8,
    marginHorizontal:8,
    margin:50,
    
  },
  title: {
    fontSize: 22,
  },
});

export default App;