import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { G, Path, Rect, Svg } from "react-native-svg";
import { wholeGraphStyle } from '../WeeklyGraph/WeeklyGraphStyleSheet';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function wholeGraph() {
 return(
    <SafeAreaView style={{backgroundColor:"lightgrey", flex: 1}}>
        <View style={wholeGraphStyle.container}>


      </View>
    </SafeAreaView>
    
 )
};