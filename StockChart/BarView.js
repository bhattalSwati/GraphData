import React, {useContext} from "react";
import { Text, View, StyleSheet,FlatList } from "react-native";
import { stockStyle } from "./StylingForm";
import Bar from './Bar';
import AppDataContext from "./Context";

const graphData = [
  {
    values: [
      {data: [300], barColor: '#FF4F00'},
      {data: [80], barColor: '#3944BC'},
      {data: [150], barColor: '#028A0F'},
      {data: [300], barColor: '#FF4F00'},
      {data: [100], barColor: '#3944BC'},
      {data: [150], barColor: '#028A0F'},
      {data: [250], barColor: '#FF4F00'},
      {data: [300], barColor: '#3944BC'},
      {data: [100], barColor: '#028A0F'},
      {data: [200], barColor: '#FF4F00'},
    ],
  },
];
const headers = ['All', '2h', '4h', '8h', '16h', '32h', '37h'];

export default function BarGraph() {
  console.log("Graph execute....")
  const [price , setPrice ] = useContext(AppDataContext);

    return (
      <View style={stockStyle.barContainerView}>
        <View style={stockStyle.graphMainView}>
        <View
          style={{
            flex: 0.1,
            marginHorizontal: 10,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={stockStyle.popupLightText}>Current Balance(USD)</Text>
          <Text style={stockStyle.popupLightText}>USD</Text>
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            flexDirection: 'coloumn',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}>
          <Text style={stockStyle.headingText}>{price}</Text>
          <Text style={stockStyle.popupLightText1}>Last update yesterday</Text>
          <FlatList
            style={{marginRight: 10, top: 6}}
            horizontal
            bounces={false}
            data={graphData[0].values}
            renderItem={({item}) => <Bar item={item} />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
          <View
            style={{
              marginTop: 10,
              height: 30,
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 10,
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}>
            {headers.map((mapHeader, index) => (
              <Text key={index}>{mapHeader}</Text>
            ))}
          </View>
        </View>
        </View>
        
      </View>
    )
};