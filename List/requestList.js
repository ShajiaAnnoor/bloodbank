import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Share,
  Linking,
  
} from 'react-native';
import { Paragraph } from 'react-native-paper';

import FormModal from '../Forms/requestformmodal';

import call from 'react-native-phone-call';

//import { ShareApi } from 'react-native-fbsdk-next';

  //const inputValue = '01727192452';

  {/*const shareOnFacebook1 = () => {
    // Build up a shareable link.
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: "https://facebook.com",
      contentDescription: 'Wow, check out this great site!',
    };

  // Share using the share API.
    ShareApi.canShare(shareLinkContent).then(
      function(canShare) {
        if (canShare) {
          return ShareApi.share(shareLinkContent, '/me', 'Some message.');
        }
      }
    ).then(
      function(result) {
        console.log('Share with ShareApi success.');
      },
      function(error) {
        console.log('Share with ShareApi failed with error: ' + error);
      }
    );
  }*/}
  const triggerCall = (item) => {
    // Check for perfect 10 digit length
    

    const args = {
      number: item.phone,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  const triggerCall1=(item)=>{
    const { phoneNumber } = item.phone;

    Linking.openURL(`tel:${phoneNumber}`)
  }

const postOnFacebook = () => {
  const facebookShareURL ='https://aboutreact.com';

const postContent = 'Hello Guys, This is a testing of facebook share   example';
  let facebookParameters = [];
  if (facebookShareURL)
    facebookParameters.push('u=' + encodeURI(facebookShareURL));
  if (postContent)
    facebookParameters.push('quote=' + encodeURI(postContent));
  const url =
    'https://www.facebook.com/sharer/sharer.php?'
     + facebookParameters.join('&');

  Linking.openURL(url)
    .then((data) => {
      alert('Facebook Opened');
    })
    .catch(() => {
      alert('Something went wrong');
    });
}


const shareMessage = async (item) => {
let msg = item.name + "\n" + item.district; 
  //Here is the Share API
  await Share.share({
    message: msg.toString(),
    url: "www.aubichol.com",
  })
    //after successful share return result
    .then((result) => console.log(result))
    //If any thing goes wrong it comes here
    .catch((errorMsg) => console.log(errorMsg));
};


function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <View style={{ alignItems: 'flex-start', flex: 1 }}>
        <Paragraph style={{ fontWeight: 'bold',}} >{item.name} </Paragraph>
        <Text style={{ fontWeight: 'bold',}}>{item.bloodGroup} </Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.district}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.area}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.address}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.quantity}</Text>
        <Text style={{ fontWeight: 'bold',  }} >{item.phone}</Text>
        <Paragraph style={{ fontWeight: 'bold',  }} >{item.reason}</Paragraph>
        
      </View>

      <View style = {styles.ShareButtonContainer}>
      <TouchableOpacity
        style={{
          height:20,
          width: 50,
          alignItems: 'flex-start',
        }}
        onPress={()=>postOnFacebook()}  
      >
        <Text
          style={{
            color: 'green',
            alignItems: 'center',
          
            
          }}>
          Share on FB
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{height:50,width:50, alignItems:'flex-start'}}
        onPress={()=>shareMessage(item)}
      >
        
        <Text
          style={{
            color: 'green',
            alignItems: 'flex-start',
            
          }}>
          Share
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{height:2,alignItems: 'flex-start'}}
        onPress={()=>triggerCall(item)}
      >
        
        <Text
          style={{
            color: 'green',
            alignItems: 'flex-start',
            
          }}>
          Call
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  let state = {
    data: [
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097756',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097757',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097758',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01727192452',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097760',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097761',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097762',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097763',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097764',
      },
      {
        name:'Miyah Myles ',
        bloodGroup: 'A+',
        district: 'Dhaka',
        quantity: '3 bag',
        address: 'Square Hospital',
        area:'Dhanmondi',
        reason: 'Open heart surgery',
        phone: '01749097765',
      },
    ],
  };

  return (
    <View style={styles.container2}>
      <View >
      <FormModal />
      </View>
      <View style={styles.container}>
      <FlatList       
        numColumns={1}
        style={{ flex: 15 }}
        data={state.data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.phone}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    //backgroundColor: '#F7F7F7',
    backgroundColor: '#eda187',
    marginTop: 10,
    marginBottom:10,
    width: '90%',
    justifyContent: 'space-evenly',
    alignSelf:'center',
    flexDirection:'column',
  },

  ShareButtonContainer: {
    flex: 1,
    //backgroundColor: '#F7F7F7',
    backgroundColor: '#abd1c6',
    marginTop: 10,
    marginBottom:10,
    width: '90%',
    justifyContent: 'space-between',
    alignSelf:'flex-start',
    flexDirection:'row',
  },


  modalButtonContainer:{
    margin: 20,
    padding: 20,
    backgroundColor: '#FFF',
    width: '80%',
    height: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 80,
  },

  container2: {
    
    marginTop:10,
    //backgroundColor:'#fccdb8',
    backgroundColor: '#eda187',
    width: '95%',
    height: '90%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems:'stretch',
    alignContent:'space-around',
    flexBasis:10,
  },
  listItem: {
    margin: 20,
    padding: 20,
    backgroundColor:'#fccdb8',
    //backgroundColor: '#FFF',
    width: '90%',
    height:'10%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 5,
    justifyContent: 'space-evenly',
  },
});
