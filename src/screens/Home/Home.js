import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView, StatusBar,
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

export default function Home({ navigation }) {
  const [todayData, setTodayData] = useState([
      { id: 0, name: "Bakery Bread Soft", type: "Salty", pImage: require('../../images/Items/brd1.jpg') },
      { id: 3, name: "Mix Puff", type: "Salty", pImage: require('../../images/Items/brd4.jpg') },
      { id: 1, name: "Medium Bread", type: "Salty", pImage: require('../../images/Items/brd2.jpg') },
      { id: 2, name: "Puff", type: "Spicy", pImage: require('../../images/Items/brd3.jpg') },
      { id: 4, name: "Grained Bread", type: "Salty", pImage: require('../../images/Items/brd5.jpg') },
  ]);
  const [pasta, setPasta] = useState([
    { id: 0, name: "Morton pasta", type: "Salty", pImage: require('../../images/Items/pst1.jpg') },
    { id: 1, name: "Bambino pasta", type: "Salty", pImage: require('../../images/Items/pst2.jpg') },
    { id: 2, name: "Yippee Pasta", type: "Spicy", pImage: require('../../images/Items/pst3.jpg') },
    { id: 3, name: "India Gata Rice", type: "Salty", pImage: require('../../images/Items/pst4.jpg') },
    { id: 4, name: "Basmati Rice", type: "Salty", pImage: require('../../images/Items/pst5.jpg') },
]);
const [oil, setOil] = useState([
  { id: 0, name: "Sunflower Oil", type: "Salty", pImage: require('../../images/Items/oil1.jpg') },
  { id: 1, name: "Fortune Refined", type: "Salty", pImage: require('../../images/Items/oil2.jpg') },
  { id: 2, name: "Sunmoon Refined", type: "Spicy", pImage: require('../../images/Items/oil3.jpg') },
  { id: 3, name: "Kissan", type: "Salty", pImage: require('../../images/Items/oil4.jpg') },
  { id: 4, name: "Dark Soya", type: "Salty", pImage: require('../../images/Items/oil5.jpg') },
]);
const [fFood, setfFood] = useState([
  { id: 0, name: "Pocket naan", type: "Salty", pImage: require('../../images/Items/ff1.jpg') },
  { id: 1, name: "Mockup", type: "Salty", pImage: require('../../images/Items/ff2.jpg') },
  { id: 2, name: "Mixed Veg", type: "Spicy", pImage: require('../../images/Items/ff3.jpg') },
  { id: 3, name: "Beans", type: "Salty", pImage: require('../../images/Items/ff4.jpg') },
  { id: 4, name: "Caulipower Chick", type: "Salty", pImage: require('../../images/Items/ff5.jpg') },
]);
  const startBtn = () => {
      navigation.navigate("Login");
  }
  const registerNow = () => {
      navigation.navigate("Registration");
  }
  const SeeMore = () => {
      navigation.navigate("AllItems");
  }
  const renderCategories = (item) => {
      return (
          <View style={Style.catFlatView}>
              <Image source={item.pImage} style={Style.catFlatImage} />
              <Txt a="c" c="ttl" s={13}>{item.name}</Txt>
          </View>
      )
  }
  const OpenSingleItem = () => {
      navigation.navigate("SingleItem");
  }
  const renderTodayItem = (item) => {
      return (
          <TouchableOpacity style={Style.itemsStyle} onPress={() => OpenSingleItem()}>
              <Image source={item.pImage} style={Style.itemImage} />
              <View style={Style.itemFlatTextView}>
                  {/* <Txt c="bgrdrk">{item.type}</Txt> */}
                  <Txt c="ttl" w="500" s={15}>{item.name}</Txt>
                  <Txt c="bgrdrk" w="500">$55</Txt>
                  {/* <View style={Style.addCartView}>
                      <Txt a="c" c="bgrdrk" w="500">Add to cart</Txt>
                  </View> */}
              </View>
          </TouchableOpacity>
      )
  }
  const GoTOCart = () => {
      navigation.navigate("CartScreen");
  }
  const OpenNotifications = () => {
      navigation.navigate("Notifications");
  }
  return (
      <ScrollView style={Style.background}>
          <StatusBar backgroundColor={BGR} />
          <View style={Style.firstView}>
              <View style={Style.searchMain}>
                  <View style={Style.searchBarStyle}>
                      <MaterialIcons size={20} color={BGRDRK} name="search" />
                      <TextInput
                          style={Style.textInputStyle}
                          placeholder='Search product list by title'
                      />
                  </View>
                  {/* <View style={Style.iconBtnsView}>
                  <TouchableOpacity onPress={() => OpenNotifications()}>
                      <MaterialIcons size={30} color="#fff" name="notifications-none" style={Style.UprIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => GoTOCart()}>
                      <MaterialCommunityIcons size={30} color="#fff" name="cart-outline" style={Style.UprIcon} />
                  </TouchableOpacity>
                  </View> */}
              </View>
              {/* <View style={Style.addressStyle}>
                  <View style={Style.addressHeading}>
                      <MaterialCommunityIcons size={25} color="#fff" name="map-marker-outline" />
                      <Txt c="w">Delivery address</Txt>
                  </View>
                  <View style={Style.addressHeading}>
                      <Txt c="w" w="500">Chandigarh, India...</Txt>
                      <MaterialIcons size={25} color="#fff" name="keyboard-arrow-down" />
                  </View>
              </View> */}
              <View style={Style.nameView}>
                  <Avatar
                      rounded
                      source={User_Img}
                      containerStyle={{ borderWidth: 2, borderColor: "#fff" }}
                      size="small"
                  />
                  <Txt ml={10} s={20} w="600" c="w">Jay Grocery Store</Txt>
              </View>
          </View>
          <View style={Style.secondView}>
            
              <View style={Style.seeMoreView}>
                  <View style={Style.textMoreInner}>
                      <Txt c="ttl" w="500" s={20}>Bakery and Bread</Txt>
                      <TouchableOpacity style={Style.seeMoreStyle} onPress={() => SeeMore()}>
                          <Txt c="bgrdrk">See more</Txt>
                          <MaterialIcons size={25} color={BGRDRK} name="keyboard-arrow-right" />
                      </TouchableOpacity>
                  </View>
                  <View style={Style.moreFlatStyle}>
                      <FlatList
                          data={todayData}
                          renderItem={({ item }) => renderTodayItem(item)}
                          keyExtractor={item => item.id}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                      />
                  </View>
              </View>
              
              <View style={Style.seeMoreView}>
                  <View style={Style.textMoreInner}>
                      <Txt c="ttl" w="500" s={20}>Frozen Foods</Txt>
                      <TouchableOpacity style={Style.seeMoreStyle} onPress={() => SeeMore()}>
                          <Txt c="bgrdrk">See more</Txt>
                          <MaterialIcons size={25} color={BGRDRK} name="keyboard-arrow-right" />
                      </TouchableOpacity>
                  </View>
                  <View style={Style.moreFlatStyle}>
                      <FlatList
                          data={fFood}
                          renderItem={({ item }) => renderTodayItem(item)}
                          keyExtractor={item => item.id}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                      />
                  </View>
              </View>

              <View style={Style.seeMoreView}>
                  <View style={Style.textMoreInner}>
                      <Txt c="ttl" w="500" s={20}>Pasta and Rice</Txt>
                      <TouchableOpacity style={Style.seeMoreStyle} onPress={() => SeeMore()}>
                          <Txt c="bgrdrk">See more</Txt>
                          <MaterialIcons size={25} color={BGRDRK} name="keyboard-arrow-right" />
                      </TouchableOpacity>
                  </View>
                  <View style={Style.moreFlatStyle}>
                      <FlatList
                          data={pasta}
                          renderItem={({ item }) => renderTodayItem(item)}
                          keyExtractor={item => item.id}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                      />
                  </View>
              </View>

              <View style={Style.seeMoreView}>
                  <View style={Style.textMoreInner}>
                      <Txt c="ttl" w="500" s={20}>Oils and Sauces</Txt>
                      <TouchableOpacity style={Style.seeMoreStyle} onPress={() => SeeMore()}>
                          <Txt c="bgrdrk">See more</Txt>
                          <MaterialIcons size={25} color={BGRDRK} name="keyboard-arrow-right" />
                      </TouchableOpacity>
                  </View>
                  <View style={Style.moreFlatStyle}>
                      <FlatList
                          data={oil}
                          renderItem={({ item }) => renderTodayItem(item)}
                          keyExtractor={item => item.id}
                          horizontal
                          showsHorizontalScrollIndicator={false}
                      />
                  </View>
              </View>

          </View>
      </ScrollView>
  )
}