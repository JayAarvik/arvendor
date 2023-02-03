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

export default function SingleItem({navigation}) {
    const goToBack = () => {
        navigation.goBack();
    }
  return (
    <View style={Style.background}>
        <ScrollView>
        <ImageBackground source={require('../../images/Items/item1.jpg')} style={Style.bgImage}>
        <View style={Style.UpperIcons}> 
        <TouchableOpacity onPress={() => goToBack()}>
            <MaterialIcons size={25} color="#fff" name="keyboard-arrow-left" style={Style.backIcon}/>
        </TouchableOpacity>
        {/* <MaterialCommunityIcons size={25} color="#fff" name="cart-outline" style={Style.backIcon}/> */}
        </View>
        </ImageBackground>
        <View style={Style.contentView}>
            <View style={Style.proDetailView}>
                <Txt c="bgrdrk">Salty</Txt>
                <Txt c="ttl" w="500" s={15}>Yotam Ottolenghi</Txt>
                <Txt s={12}>6 Pcs/Pack</Txt>
                <Txt mt={15}>Min 1 pack</Txt>
                <View style={Style.sameFlex}>
                    <Txt c="bgrdrk" s={18} w="500">$55</Txt>
                    <Txt s={12}> / 1 Pack</Txt>
                </View>
                <View style={Style.sameFlex}>
                    <Txt c="rd" s={12} w="500">- $15</Txt>
                    <Txt s={13} tdl ml={10}>$70</Txt>
                </View>
            </View>
            <View style={Style.detailView}>
                <Txt s={15} w="600" c="ttl">Product details</Txt>
                <Txt>Make the most of this budget-friendly ingredient with our best 
                    ever egg recipes, from quick lunches, to classic Scotch eggs 
                    and brilliant breakfast spreads</Txt>
            </View>
        </View>
        </ScrollView>
        <View style={Style.addMoreView}>
            {/* <View style={Style.minus}>
        <MaterialCommunityIcons size={25} color={BLUE} name="minus"/>
            </View>
            <Txt c="blue" s={18} w="600">1</Txt> */}
            <TouchableOpacity style={Style.editBtnStyle}>
            <Txt w="500" c="w">Edit Product</Txt>
            </TouchableOpacity>
            <TouchableOpacity style={Style.deleteBtnStyle}>
            <Txt w="500" c="w">Delete Product</Txt>
            </TouchableOpacity>
        </View>
    </View>
  )
}