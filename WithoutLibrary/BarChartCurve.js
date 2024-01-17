import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList,Dimensions } from "react-native";
import { graphStyle } from "./Stylesheets";
import DotView from "./DotFile";

function fetchFakeData() {
  const usersData = [];
  const range = 200; // Total number of users

  for (let i = 0; i < range; i++) {
    const x = i - range / 2; // Shifting x to start from the middle
    const bloodPressure = Math.round( 100 * Math.sin((Math.PI * x) / (range / 2)) + 110); // Parabolic function

    usersData.push({ id: i, bloodPressure });
  }

  return usersData;
}

const DATA = fetchFakeData();

const valueData = [250,200,150,100,0]
const bottomData = ["Jan","feb","mar","Aprl","May","jun"].reverse()
let xaxisComponentWidth = (Dimensions.get('window').width - 55)/6;

export default function BarGraph() {
  console.log("width",xaxisComponentWidth)
   return (
    <SafeAreaView>
      <View style={graphStyle().completeGraphView}>
        <View style = {graphStyle().mainViewBg}>
          <View style ={graphStyle().container1}/>
          <View style ={graphStyle().container2}/>
          <View style ={graphStyle().container3}/>
        </View>

     <View style ={graphStyle().container4}>
        <FlatList
        data= {DATA}
        renderItem={({item}) => <DotView posn = {item}/>}
        keyExtractor={item => item.id}
        horizontal = {true}>
        </FlatList>
     </View>
     <View style={graphStyle().valueView}>
     <FlatList 
      style = {{flex: 1}}
      data= {valueData}
      renderItem={({item}) => <View style = {{flex: 1, alignItems: 'center', height: 300/5, justifyContent: 'flex-end'}}><Text>-{item * 5}</Text></View>}
      keyExtractor={item => item}
      horizontal = {false}>
     </FlatList>

     </View>
      </View>
      <View style={graphStyle().bottomValueView}>
      <FlatList 
      style = {{flex: 1}}
      data= {bottomData}
      renderItem={({item}) => <View style={{width: xaxisComponentWidth, justifyContent: 'flex-start'}}><Text style = {{textAlign : 'right'}}>{item}</Text></View>}
      keyExtractor={item => item}
        horizontal={true}>
     </FlatList>
      </View>
     </SafeAreaView>
   )
};



