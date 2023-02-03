import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  Image,
  Modal,
  Alert
} from 'react-native'
import React, { useState } from 'react'
import Style from './Style'
import { BGC, BGR, BGRDRK, home_bg, home_scnd_bg, User_Img } from '../../Utils/Import'
import { InfoModal, Tcho, Txt } from '../../Utils/general'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-elements';

export default function Requests({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalReject, setModalReject] = useState(false);
  const [orderDetail, setOrderDetail] = useState("");
  const [AllReq, setAllReq] = useState([
    { id: 0, title: "Grocery Order", km: 1, type: "veg", details: "1 Bread, 1 Soya souce" },
    { id: 1, title: "Bread Order", km: 3, type: "nonveg", details: "1 Frozen Fish, 1 Catchup" },
    { id: 2, title: "Bakery Items Order", km: 5, type: "nonveg", details: "1 Chicken roll, 1 Frozen Chiken" },
    { id: 3, title: "Grocery Order", km: 9, type: "veg", details: "1kg Yellow Dal, 5kg India gate basmati rice" },
  ])

  const infoModalOpen = (dtl) => {
    setOrderDetail(dtl);
    setModalVisible(!modalVisible);
  }
  const rejectOrderBtn = () => {
    setModalReject(!modalReject);
  }
  const renderRequests = (item) => {
    return (
      <View style={Style.catFlatView}>
        <View style={Style.itemNameView}>
          <View style={Style.kmView}>
            <MaterialCommunityIcons size={25} color={item.type == "veg" ? BGR : BGC} name="circle-medium" />
            <Txt s={18} c="ttl">{item.title}</Txt>
          </View>
          <TouchableOpacity style={Style.infoStyle} onPress={() => infoModalOpen(item)}>
            <MaterialCommunityIcons size={20} color={BGRDRK} name="information-outline" />
          </TouchableOpacity>
        </View>
        <View style={Style.kmView}>
          <MaterialCommunityIcons size={14} color="#999" name="navigation-variant-outline" />
          <Txt ml={5} mb={3}>{item.km} km away</Txt>
        </View>
        <View style={Style.reqTabs}>
          <TouchableOpacity style={Style.accTabStyle}>
            <Txt s={16} c="w" w="600" a="c">Accept</Txt>
          </TouchableOpacity>
          <TouchableOpacity style={Style.rejTabStyle} onPress={() => rejectOrderBtn()}>
            <Txt s={16} c="w" w="600" a="c">Reject</Txt>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <View style={Style.background}>
    <View style={Style.titleViewStyle}>
      <Txt s={18} c="w" w="600" ml={5}>Order Requests</Txt>
    </View>
      <View style={Style.contentView}>
        <FlatList
          data={AllReq}
          renderItem={({ item }) => renderRequests(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <TouchableOpacity
              style={[Style.button, Style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <MaterialCommunityIcons size={20} color={BGRDRK} name="close" style={Style.textStyle} />
            </TouchableOpacity>
            <Txt s={18} w="600" c="bgr">{orderDetail.title}</Txt>
            <Text style={Style.modalText}>{orderDetail.details}</Text>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalReject}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalReject);
        }}
      >
        <View style={Style.centeredView}>
          <View style={Style.modalView}>
            <TouchableOpacity
              style={[Style.button, Style.buttonCloseReject]}
              onPress={() => setModalReject(!modalReject)}>
              <MaterialCommunityIcons size={20} color={BGRDRK} name="close" style={Style.textStyle} />
            </TouchableOpacity>
            <Txt s={18} w="600" c="rd">Reason of rejection</Txt>
            <TextInput
              multiline={true}
              style={Style.rejectionReasonStyle}
            />
            <TouchableOpacity style={Style.rejectSubmitStyle}>
              <Txt c="w" w="500" >Reject</Txt>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}
