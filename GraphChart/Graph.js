
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MultiColorBarChart = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D','E','F','G','H'],
    datasets: [
      {
        data: [25, 40, 30, 55,89,65,54,98],
        color: (opacity = 1) => `rgba(130, 75, 249, ${opacity})`, // Change the color as needed
      },
      {
        data: [40, 60, 45, 70],
        color: (opacity = 1) => `rgba(62, 145, 49, ${opacity})`, // Change the color as needed
      },
    ],
  };

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

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(122, 76, 890, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.chart}
        data={data}
        width={300}
        height={200}
        yAxisLabel=""
        yLabelsOffset={70}
        chartConfig={chartConfig}
      />
      {/* <View style={{flex: 1}}>
       <NavigationContainer>
        <MyTab />
      </NavigationContainer>
      </View> */}
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default MultiColorBarChart;
