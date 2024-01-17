// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BarChartCurve from "./WithoutLibrary/BarChartCurve"
import WeeklyGraph from "./WeeklyGraph/WeeklyGraph"

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor:"lightgreen", height:150, width:300, justifyContent:"center", marginLeft:50, borderRadius:30, marginTop:100}}>
      <Text style={{color:"black", fontSize: 18,backgroundColor:'green', textAlign: 'center'}}>Home Screen</Text>
      </View>
      <TouchableOpacity style={{alignItems: 'center', backgroundColor: 'green', padding: 15, marginTop: 50, marginLeft:50, marginRight:50, borderRadius:20}}
        onPress={() => navigation.navigate('BarChartCurve')}>
        <Text style={{fontSize: 18}}>Bar chart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{alignItems: 'center', backgroundColor: 'green', padding: 15, marginTop: 50, marginLeft:50, marginRight:50, borderRadius:20}}
        onPress={() => navigation.navigate('WeeklyGraph')}>
        <Text style={{fontSize: 18}}>Weekly chart</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerBackTitle:"Back"}}name="BarChartCurve" component={BarChartCurve}/>
        <Stack.Screen options={{headerBackTitle:"Back"}}name="WeeklyGraph" component={WeeklyGraph}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;