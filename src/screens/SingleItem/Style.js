import { StyleSheet } from "react-native"
import { BGC, BGR, BGRDRK, BLUE } from "../../Utils/Import";

const Style = StyleSheet.create({
   background:{
    backgroundColor:"#fff",
    flex:1,
   },
   bgImage:{
    height:300,
    width:"100%",
    resizeMode:"cover"
   },
   contentView:{
    padding:20,
    marginTop:-70
   },
   UpperIcons:{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:10
   },
   backIcon:{
    padding:5,
    backgroundColor:"#777",
    borderRadius:50
   },
   proDetailView:{
    backgroundColor:"#fff",
    elevation:5,
    padding:15,
    borderRadius:15
   },
   sameFlex:{
    flexDirection:"row",
    alignItems:"center"
   },
   detailView:{
    marginTop:15,
    backgroundColor:"#F3F8F3",
    padding:5
   },
   addMoreView:{
    backgroundColor:"#fff",
    flexDirection:"row",
    justifyContent:"space-evenly",
    borderColor:"#DcDcDc",
   //  borderTopWidth:2,
   //  borderBottomWidth:0,
   //  borderLeftWidth:2,
   //  borderRightWidth:2,
    // marginHorizontal:15,
    borderRadius:10,
    alignItems:"center",
    bottom:3,
    position:"absolute",
    width:"100%",
    paddingTop:5,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
   },
   minus:{
    borderColor:BLUE,
    borderWidth:1,
    padding:10,
    marginVertical:5,
    borderRadius:10
   },
   editBtnStyle:{
    backgroundColor:BGR,
    paddingHorizontal:25,
    paddingVertical:15,
    borderRadius:10
   },
   deleteBtnStyle:{
    backgroundColor:"red",
    paddingHorizontal:25,
    paddingVertical:15,
    borderRadius:10
   }
})

export default Style;