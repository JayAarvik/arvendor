import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    TextInput,
    FlatList,
    Image
} from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { BGR, BGRDRK, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
import { Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';

export default function AllItems({ navigation }) {
    const [catData, setCatData] = useState([
        { id: 0, name: "All Products", pImage: require('../../images/Categories/grid.png') },
        { id: 1, name: "Fruits", pImage: require('../../images/Categories/fruits.png') },
        { id: 2, name: "Vegetables", pImage: require('../../images/Categories/veg.png') },
        { id: 3, name: "Meat & Egg", pImage: require('../../images/Categories/meat.png') },
        { id: 4, name: "Fish & Seafood", pImage: require('../../images/Categories/fish.png') },
    ]);
    const [todayData, setTodayData] = useState([
        { id: 0, name: "Bakery Bread Soft", type: "Salty", pImage: require('../../images/Items/brd1.jpg') },
        { id: 1, name: "Medium Bread", type: "Salty", pImage: require('../../images/Items/brd2.jpg') },
        { id: 2, name: "Puff", type: "Spicy", pImage: require('../../images/Items/brd3.jpg') },
        { id: 3, name: "Mix Puff", type: "Salty", pImage: require('../../images/Items/brd4.jpg') },
        { id: 4, name: "Grained Bread", type: "Salty", pImage: require('../../images/Items/brd5.jpg') },
        { id: 5, name: "Bakery Bread Soft", type: "Spicy", pImage: require('../../images/Items/brd1.jpg') },
        { id: 6, name: "Medium Bread", type: "Salty", pImage: require('../../images/Items/brd2.jpg') },
        { id: 7, name: "Puff", type: "Salty", pImage: require('../../images/Items/brd3.jpg') },
    ]);
    const goBack = () => {
        navigation.goBack();
    }
    const OpenSingleItem = () => {
        navigation.navigate("SingleItem");
    }
    const renderCategories = (item) => {
        return (
            <View style={Style.catFlatView}>
                <Image source={item.pImage} style={Style.catFlatImage} />
                <Txt a="c" c="ttl" s={13}>{item.name}</Txt>
            </View>
        )
    }
    const renderTodayItem = (item) => {
        return (
            <View style={Style.itemsStyle}>
                <TouchableOpacity onPress={() => OpenSingleItem()}>
                    <Image source={item.pImage} style={Style.itemImage} />
                </TouchableOpacity>
                <View style={Style.itemFlatTextView}>
                    <TouchableOpacity>
                        <Txt c="bgrdrk">{item.type}</Txt>
                        <Txt c="ttl" w="500" s={15}>{item.name}</Txt>
                        <Txt c="bgrdrk" w="500">$55</Txt>
                    </TouchableOpacity>
                    {/* <View style={Style.addCartView}>
                        <Txt a="c" c="bgrdrk" w="500">Add to cart</Txt>
                    </View> */}
                </View>
            </View>
        )
    }
    const FooterList = () => {
        return (
            <View style={Style.footerStyle}>
                <Txt c="ttl">Disclaimer :</Txt>
                <Txt>All prices are set directly by the restaurant.</Txt>
                <Txt>An average active adult requires 2,000 kcal energy per day.</Txt>
            </View>
        )
    }
    const HeaderList = () => {
        return (<>
            <View style={Style.firstView}>
                <View style={Style.searchMain}>
                    <TouchableOpacity onPress={() => goBack()}>
                        <MaterialIcons size={30} color="#fff" name="keyboard-arrow-left" style={Style.UprIcon} />
                    </TouchableOpacity>
                    <View style={Style.searchBarStyle}>
                        <MaterialIcons size={20} color={BGRDRK} name="search" />
                        <TextInput
                            style={Style.textInputStyle}
                            placeholder='Search product by name'
                        />
                    </View>
                    {/* <MaterialCommunityIcons size={30} color="#fff" name="cart-outline" style={Style.UprIcon} /> */}
                </View>
            </View>
            <Txt w="600" s={18} mt={10} ml={15} c="bgr">Bakery and Bread</Txt>
            {/* <View style={Style.catgryView}>
                <FlatList
                    data={catData}
                    renderItem={({ item }) => renderCategories(item)}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View> */}

            {/* <View style={Style.borderLine}></View> */}
        </>
        )
    }
    return (
        <View style={Style.background}>
            <StatusBar backgroundColor={BGR} />

            <View style={Style.seeMoreView}>
                <View style={Style.moreFlatStyle}>
                    <FlatList
                        data={todayData}
                        renderItem={({ item }) => renderTodayItem(item)}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        // contentContainerStyle={{ paddingBottom: 100 }}
                        ListHeaderComponent={() => HeaderList()}
                        ListFooterComponent={() => FooterList()}
                    />
                </View>
            </View>
        </View>
    )
}