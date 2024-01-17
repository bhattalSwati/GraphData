import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      borderRadius: 20,
      marginTop: 200,
      marginRight: 50,
      marginLeft: 20,
      backgroundColor: "clear",
      flexDirection: 'column',
      height: 300,
    },
    chart: {
      marginVertical: 0,
      borderRadius: 16,
    },
    chartTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    container1: {
     borderRadius: 5,
     backgroundColor: "lightyellow",
     height: 50,
     flex: 3,
    },
    container2: {
      backgroundColor: "lightgrey",
      flex: 2,
    },
    container3: {
      backgroundColor: "lightpink",
      flex: 1,
      borderRadius: 5,
    },
    container4: {
      backgroundColor: "green",
      height: 300,
      width: 'auto',
      borderRadius: 5,
    },
  });
  
  export {styles};