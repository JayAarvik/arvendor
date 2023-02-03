import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  Image,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { BGR, BGRDRK, home_bg, home_scnd_bg, LGR, User_Img } from '../../Utils/Import'
import { Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
import DropDownPicker from 'react-native-dropdown-picker';

export default function AddProduct() {
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Veg',
      value: 'veg'
    },
    {
      id: '2',
      label: 'Non-Veg',
      value: 'nonveg'
    }
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [CatItems, setCatItems] = useState([
    { label: 'Bakery and Bread', value: 'Bakery and Bread' },
    { label: 'Pasta and Rice', value: 'Pasta and Rice' },
    { label: 'Cereals and Breakfast Foods', value: 'Cereals and Breakfast Foods' },
    { label: 'Frozen Foods', value: 'Frozen Foods' },
    { label: 'Meat and Seafood', value: 'Meat and Seafood' },
    { label: 'Oils and Sauces', value: 'Oils and Sauces' },
    // { label: 'Madrid', value: 'madrid', parent: 'spain' },
    // { label: 'Barcelona', value: 'barcelona', parent: 'spain' },
  ]);
  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <View style={Style.background}>
      <View style={Style.titleViewStyle}>
      <Txt s={18} c="w" w="600" ml={5}>Add New Product</Txt>
    </View>
      <View style={{padding:10, zIndex:1}}>
        <Txt>Product Category</Txt>
        <View style={Style.dropdownView}>
          <DropDownPicker
            open={open}
            value={value}
            items={CatItems}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setCatItems}
            style={Style.mainDropdownStyle}
            dropDownContainerStyle={Style.dropDownConStyle}
          // theme="Light"
          // multiple={true}
          // mode="BADGE"
          // badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
          />
        </View>
      </View>

      <ScrollView>
        <View style={Style.contentView}>
          <View style={Style.formView}>
            <Txt>Product Name</Txt>
            <TextInput
              style={Style.textInputStyle}
              placeholder="Enter Product name"
            />
          </View>
          <View style={Style.formView}>
            <Txt>Product Price</Txt>
            <TextInput
              style={Style.textInputStyle}
              placeholder="Enter Product price"
            />
          </View>
          <View style={Style.formView}>
            <Txt>Your Price</Txt>
            <TextInput
              style={Style.textInputStyle}
              placeholder="Enter Your price"
            />
          </View>
          <View style={Style.formView}>
            <Txt>Product Description</Txt>
            <TextInput
              style={Style.textInputStyle}
              placeholder="Enter Product Description"
            />
          </View>
          <View style={Style.formView}>
            <Txt>Product Type</Txt>
            <RadioGroup
              style={Style.textInputStyle}
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              containerStyle={Style.radioContStyle}
            />
          </View>
          <View style={Style.formView}>
            <Txt>Product Images</Txt>
            <TouchableOpacity style={Style.chosseImagesStyle}>
                <Txt a="c">Choose Image</Txt>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      <TouchableOpacity style={Style.submitStyle}>
            <Txt c="w" a="c" s={15} w="600">Submit</Txt>
          </TouchableOpacity>
    </View>
  )
}