import { StyleSheet } from "react-native";
//import { styles } from "../GraphChart/StyleSheet";

const graphStyle = (y) => StyleSheet.create({
    mainViewBg: {
        backgroundColor: 'white',
        width: '85%',
        height: 300,
    },
    dotView:{
     backgroundColor: 'black',   
     height: 80,
     width: 20,
     top: 220,
     borderRadius: 5,
     marginHorizontal: 1,
     justifyContent: 'center',
     position: 'relative',
    },
    barView: {
        backgroundColor: 'black',   
        height: 'auto',
        width: 30,
        top: 300 - 5 - y,
        borderRadius: 5,
        marginHorizontal: 10,
        justifyContent: 'center',
        position: 'relative',  
    },
    dotText:{
        fontSize: 0,
        textAlign: 'center',
    },
    container1: {
        borderRadius: 5,
        backgroundColor: "lightyellow",
        flex: 3,
       },
       container2: {
         backgroundColor: "lightgrey",
         flex: 2,
       },
       container3: {
         backgroundColor: "pink",
         flex: 1,
         borderRadius: 5,
       },
       container4: {
        position: 'absolute',
         top: 0,
         height: 300,
         width: '85%',
         borderRadius: 5,
    },
    flatListView: {
        backgroundColor: 'red',
        height: 10,
    },
    completeGraphView: {
        flexDirection: 'row',
    },
    valueView:{
       flexDirection: 'column',
       flex: 1,
       justifyContent: 'space-between',
    },
    bottomValueView: {
     backgroundColor: 'white',
     marginRight:55,
     flexDirection: 'row',
     justifyContent: "space-between",
     height: 50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
})


export {graphStyle};