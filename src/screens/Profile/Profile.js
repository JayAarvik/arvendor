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
import { BGR, BGRDRK, BLUE, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
import { Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';

export default function Profile({navigation}) {
  const EditProfileBtn = () => {
      navigation.navigate("EditDetails")
  }
return (
  <ScrollView style={Style.background}>
      <View style={Style.contentView}>
          <View>
              <Image source={require("../../images/user.jpg")} style={Style.userImageStyle} />
              <Txt a="c" s={18} mt={5} c="bgrdrk">Jay Grocery Store</Txt>
          </View>
          <View style={Style.textViewStyle}>
              <View style={Style.textInnerStyle}>
                  <Txt c="ttl" w="400" s={16}>Phone Number</Txt>
                  <Txt w="500">+93 6847 2676</Txt>
              </View>
              <View style={Style.textInnerStyle}>
                  <Txt c="ttl" w="400" s={16}>Email</Txt>
                  <Txt w="500">grocery@gmail.com</Txt>
              </View>
              <View style={Style.textInnerStyle}>
                  <Txt c="ttl" w="400" s={16}>Total Stores/Outlets</Txt>
                  <Txt w="500">1</Txt>
              </View>
              <View style={Style.textInnerStyle}>
                  <Txt c="ttl" w="400" s={16}>Address</Txt>
                  <Txt w="500">SCO 38, Phase 5, Mohali, Punjab, India.</Txt>
              </View>
          </View>
          <TouchableOpacity style={Style.editProfileStyle} onPress={() => EditProfileBtn()}>  
              <MaterialCommunityIcons size={25} color={BGR} name="account-edit-outline" />
              <Txt c="bgr" w="500" s={18} ml={5}>Edit Details</Txt>
          </TouchableOpacity>
          {/* <View style={Style.checkCartStyle}>  
              <MaterialCommunityIcons size={25} color="#fff" name="cart-outline" />
              <Txt c="w" w="500" s={18} ml={5}>Check your cart</Txt>
          </View> */}
      </View>
  </ScrollView>
)
}