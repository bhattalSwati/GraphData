import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { G, Path, Rect, Svg } from "react-native-svg";
import { styles } from '../GraphCurve/StyleForm';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';
import { Dimensions } from 'react-native'; 

const BarChartExample = () => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Aprl', 'May'],
      datasets: [
        {
          data: [20, 30, 29, 45, 100,78,65,54],
        },
      ],
    };

    return (
      <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.container1}></View>
        <View style={styles.container2}></View>
        <View style={styles.container3}></View>
        <View style={styles.container4}></View>
        <View style = {{position: 'absolute',height: 300,width:300}}>
        <ScrollView horizontal>
        <LineChart
          style={styles.chart}
          data={data}
          width={Dimensions.get('window').width * 2}
          height={335}
          withInnerLines={false}
          withVerticalLines={false}
          withHorizontalLines={false}
          withShadow={false}
          yAxisLabel="$"
          yLabelsOffset={70}
          verticalLabelRotation={0}
          chartConfig={chartConfig}
          bezier
        />
        </ScrollView>
        </View>
      </View>
      </SafeAreaView>
    );
  };

  const chartConfig = {
    backgroundColor: 'white',
    backgroundGradientToOpacity: 0,
    backgroundGradientFromOpacity: 0,
    
    backgroundGradientFrom: 'green',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };

  export default BarChartExample;
  