import React, {
  useState,
}from 'react';
import {
  Text,
  View,
  FlatList,
  Share,
  Linking,
  Picker,
  Button,
  Pressable,  
} from 'react-native';
import { Paragraph } from 'react-native-paper';
//import call from 'react-native-phone-call';

import { styles } from "./request.style";
import FormModal from '../../Forms/requestformmodal';

let all_data = {
  data: [
    {
      name:'Miyah Myles ',
      bloodGroup: 'O-',
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
      bloodGroup: 'O-',
      district: 'Dhaka',
      quantity: '3 bag',
      address: 'Square Hospital',
      area:'Dhanmondi',
      reason: 'Open heart surgery',
      phone: '01749097758',
    },
    {
      name:'Miyah Myles ',
      bloodGroup: 'B-',
      district: 'Dhaka',
      quantity: '3 bag',
      address: 'Square Hospital',
      area:'Dhanmondi',
      reason: 'Open heart surgery',
      phone: '01727192452',
    },
    {
      name:'Miyah Myles ',
      bloodGroup: 'B+',
      district: 'Dhaka',
      quantity: '3 bag',
      address: 'Square Hospital',
      area:'Dhanmondi',
      reason: 'Open heart surgery',
      phone: '01749097760',
    },
    {
      name:'Miyah Myles ',
      bloodGroup: 'A-',
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
      bloodGroup: 'AB+',
      district: 'Dhaka',
      quantity: '3 bag',
      address: 'Square Hospital',
      area:'Dhanmondi',
      reason: 'Open heart surgery',
      phone: '01749097764',
    },
    {
      name:'Miyah Myles ',
      bloodGroup: 'O+',
      district: 'Dhaka',
      quantity: '3 bag',
      address: 'Square Hospital',
      area:'Dhanmondi',
      reason: 'Open heart surgery',
      phone: '01749097765',
    },
  ],
};

const AllDistrict =[
'Dhaka',
'Chittagong',
'Barishal',
'Rajshahi',
'Mymensingh',
'Rangpur',
'Sylhet',
'Panchagarh',
];

const AllBloodGroup=[
'A+',
'A-',
'B+',
'B-',
'AB+',
'AB-',
'O+',
'O-',
];
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
       <Pressable 
        style = {{
          height:30,
          width:50,
          borderRadius:5,
          backgroundColor : "#a6020d",
          //marginLeft :4,
          //marginRight:50,
          margin:10,
          padding :2,
          elevation: 10,
          flex: 5,
        }}
               // style ={styles.filterButton}
        onPress={()=>postOnFacebook(item)}
      >
          <Text style={styles.textStyle}>Share on Facebook</Text>
        </Pressable>       

       <Pressable 
          style = {{
            height: 30,
            width:20,
            borderRadius:5,
            backgroundColor : "#a6020d",
            margin:10,
            padding:2,
            elevation: 10,
            flex:3,
          }}
               // style ={styles.filterButton}
          onPress={()=>shareMessage(item)}
        >
           <Text style={styles.textStyle}>Share</Text>
        </Pressable>    

      <Pressable 
        style ={{
          height: 30,
          width:20,
          borderRadius:5,
          backgroundColor : "#a6020d",
          //marginLeft :4,
          //marginRight:50,
          margin :10,
          padding:2,
          elevation: 10,
          flex:2,
        }}
        // style ={styles.filterButton}
        onPress={()=>triggerCall(item)}
      >
          <Text style={styles.textStyle}>Call</Text>
      </Pressable>
      </View>
    </View>
  );
}

export default function App() {

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");

  const [filteredData, setFilteredData] = useState(all_data.data);

  const onPressAll = () => {    
    setFilteredData(all_data.data);
    //setSelectedValue(itemValue)
  };

  const onPickerPress1 = (itemValue) => {
    setSelectedDistrict(itemValue);
  }

  const onPickerPress2 = (itemValue) => {
    setSelectedBloodGroup(itemValue);
  }

  const onPressBoth = (district, bloodgroup) => {
    const newData = all_data.data.filter((item) => {
      if( district == "" ) return true ; 
      return item.district == district;
    });

    const finalData = newData.filter((item) => {
      if( bloodgroup == "" ) return true ; 
      return item.bloodGroup == bloodgroup;
    })
    setFilteredData(finalData);
  }

  useEffect(()=>{
    //api call will be made by dispatching thunks
    dispatch(fetchBloodRequestListThunk)

    return function cleanup() {

    }

  })
  //const [filteredData, setFilteredData] = useState(all_data.data);
  const filteredData = useSelector(getBloodRequestList);

  return (
    <View style={styles.container2}>
      <View style={styles.modalButtonContainer}>
      <FormModal />
      </View>

      <View style={styles.filterContainer}>
          <Picker
            selectedValue={selectedDistrict}
            style={{ height: 50, width: 150, margin:2,padding:2,}}
            onValueChange={(itemValue, itemIndex) => onPickerPress1(itemValue,itemIndex)}
          >
            {AllDistrict.map((district) => {
              return(
                <Picker.Item label={district} value={district}/>
              );
            })}
          </Picker>

          <Picker
            selectedValue={selectedBloodGroup}
            style={{ height: 50, width: 150  }}
            onValueChange={(itemValue, itemIndex) => onPickerPress2(itemValue,itemIndex)}
          >
            {AllBloodGroup.map((bloodGroup) => {
              return(
                <Picker.Item label={bloodGroup} value={bloodGroup}/>
              );
            })}
          </Picker>
          
      </View>

      <View style={styles.filterContainer}>
          <Button 
            style={styles.filterButton}
            onPress={()=>onPressBoth(selectedDistrict,selectedBloodGroup)} 
            title="Apply Filter" 
            color='#a7d1c9' 
            touchSoundDisabled ="false"
          />

            <Button 
              style={styles.filterButton}
              onPress={()=>onPressAll()} 
              title="See Full List" 
              color='#a7d1c9' 
              touchSoundDisabled ="false"
            />  
          
      </View>
      <View style={styles.container}>
      <FlatList       
        numColumns={1}
        style={{ flex: 15 }}
        data={filteredData}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.phone}
      />
      </View>
    </View>
  );
}


