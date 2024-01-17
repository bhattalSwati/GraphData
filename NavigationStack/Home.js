import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { G, Path, Rect, Svg } from "react-native-svg";
import { styles } from '../NavigationStack/GraphStyle';
import { TabView, SceneMap } from 'react-native-tab-view';

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
function SettingScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center"}}>
             <Text>Setting Screen</Text>
        </View>
    );
  }

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  function Home() {
    return (
      <NavigationContainer>
        <MyTab />
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
  }

  function MyTab() {
    return (
        <Tab.Navigator screenOptions={{
          tabBarStyle: { position: 'absolute' },
        }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Setting" component={SettingScreen}/>
        </Tab.Navigator>
    );
  }

  const BarChartExample = () => {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Aprl', 'May'],
      datasets: [
        {
          data: [20,30,29,45,100,78,65,54],
        },
      ],
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.chartTitle}>Monthly Sales</Text>
        <LineChart
          style={styles.chart}
          data={data}
          width={300}
          height={400}
          yAxisLabel="$"
          verticalLabelRotation={0}
          chartConfig={chartConfig}
          withInnerLines={false}
          withOuterLines={false}
          yLabelsOffset={-240}
          getDotColor={"blue"}
          bezier
        />

      </View>
    );
  };
  
  const chartConfig = {
    backgroundGradientFrom: 'green',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
  };
  
  
  export default BarChartExample;