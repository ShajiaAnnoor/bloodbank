import React from 'react';
import { SafeAreaView,View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity,Button } from 'react-native';

export default function Eligibility({navigation}) {
  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>more options here</Text>
      <TouchableOpacity>
       <Button
      title="Go back"
      onPress={() =>
        navigation.navigate('More')
      }
    />
      </TouchableOpacity>
    </View>
  );
}