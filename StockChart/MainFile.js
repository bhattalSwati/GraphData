import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { stockStyle } from './StylingForm';
import Header from './HeaderFile';
import NavigateView from './NavigationView';
import BarGraph from './BarView';
import listView from './Listview';
import AppDataContext, { Context2 } from './Context';

export default function StockGraphChart() {

  const [price, setPrice] = useState("0");

  return (
    <AppDataContext.Provider value={[price, setPrice]}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <BarGraph />
        <NavigateView />
      </SafeAreaView>
    </AppDataContext.Provider>
  );
};