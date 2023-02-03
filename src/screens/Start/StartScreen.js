import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Style from './Style'
import { home_bg, home_scnd_bg } from '../../Utils/Import'
import { Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StartScreen({navigation}) {
    const startBtn = ()  => {
        navigation.navigate("Login");
    }
    const registerNow = () => {
        navigation.navigate("Registration");
    }
  return (
    <View style={Style.background}>
      <ImageBackground source={home_bg} style={Style.bgImage} blurRadius={4}>
            <View style={Style.contentView}>
                    <View style={Style.languageStyle}>
                        {/* <MaterialIcons size={20} color="#555" name="arrow-back-ios" /> */}
                        <MaterialCommunityIcons size={25} color="#fff" name="web" />
                        <Txt w="500" c="w" s={12}>English</Txt>
                        <MaterialIcons size={30} color="#fff" name="keyboard-arrow-down" />
                    </View>
                    <View style={Style.firstHeading}>
                        <Txt s={30} pt={10} w="600" c="w">Sell Your Grocery</Txt>
                        <Txt s={30} pt={10} w="600" c="w" mt={10}>Everyday!</Txt>
                        <Txt s={15} pt={10} w="400" c="w" mt={5}>
                            We are here for helping you and organize your
                        </Txt>
                        <Txt s={15} pt={2} w="400" c="w">
                            daily grocery products.
                        </Txt>
                    </View>
                    <View style={Style.submitBtnsStyle}>
                            <TouchableOpacity style={Style.submitBtnStyle} onPress={() => startBtn()}>
                                <Txt a="c" c="bgr" s={15} w="500">Start Now</Txt>
                            </TouchableOpacity>               
                            <Txt a="c" c="w" mt={10}>
                                Don't have a store account?
                            <Txt c="w" w="500" onPress={() => registerNow()}> Register Your Store</Txt>
                            </Txt>         
                    </View>
            </View>
      </ImageBackground>
    </View>
  )
}