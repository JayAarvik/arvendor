import { StyleSheet } from "react-native"
import { BGC, BGR, BGRDRK, LGR } from "../../Utils/Import";

const Style = StyleSheet.create({
    background: {
        backgroundColor: "#fff",
        flex: 1
    },
    bgImage: {
        height: "100%",
        width: "100%",
        resizeMode: "cover"
    },
    contentView: {
        paddingHorizontal: 10,
        height: "100%"
    },
    titleViewStyle:{
        backgroundColor:BGR,
        padding:10,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
       }, 
    formView: {
        marginVertical: 5,
        marginHorizontal: 5
    },
    textInputStyle: {
        backgroundColor: LGR,
        borderRadius:5
    },
    radioContStyle: {
        flexDirection: "row",
        backgroundColor: LGR,
        padding: 5,
        borderRadius:5
    },
    dropdownView:{
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:1,
        marginVertical:5
    },
    mainDropdownStyle:{
        borderColor:"transparent",
        backgroundColor:LGR
    },
    dropDownConStyle: {
        backgroundColor: "#f5f5f5",
        borderBottomColor:"#DCDCDC",
        borderLeftColor:"#DCDCDC",
        borderRightColor:"#DCDCDC",
        borderTopColor:"transparent",
        padding:5
      },
      chosseImagesStyle:{
        backgroundColor:LGR,
        padding:10,
        width:"50%"
      },
      submitStyle:{
        marginVertical:10,
        backgroundColor:BGR,
        padding:10,
        borderRadius:5,
        marginHorizontal:10
      }
})

export default Style;