import React from 'react';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from '@react-navigation/native';

const DropdownScreen = () => {

    const countries = ["Donor", "Organization", "Patient"]
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    navigation.navigate(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
                rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />
        </View>
    );
};

export default DropdownScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
    },
    dropdown2: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: 20,
        padding: 8,
    },
    icon: {
        marginRight:1,
        width:5,
        height:5,
    },
    item: {
        paddingVertical: 8,
        paddingHorizontal: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 8,
    },
});
