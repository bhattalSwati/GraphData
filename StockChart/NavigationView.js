import React, { useState,useContext, memo, useCallback} from "react";
import { Text, View, StyleSheet, useWindowDimensions, Image, TextInput, FlatList } from "react-native";
import { stockStyle } from "./StylingForm";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ListView from './Listview';
import AppDataContext from "./Context";

const ItemList = [{
  image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph",
  marketName: "BTS",
  price: "$100",
  change: "-31",
  marketCap: 235278537,
  id: 0
}, {
  image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph",
  marketName: "LTS",
  price: "$200",
  change: "-91",
  marketCap: 235278537,
  id: 1
}, {
  image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph",
  marketName: "RHS",
  price: "$300",
  change: "-14",
  marketCap: 235278537,
  id: 2
},
{
  image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph",
  marketName: "LHS",
  price: "$100",
  change: "-43",
  marketCap: 235278537,
  id: 3
},
{
  image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph",
  marketName: "BTS",
  price: "$200",
  change: "-81",
  marketCap: 235278537,
  id: 4
},
{
  image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph",
  marketName: "LTS",
  price: "$400",
  change: "-23",
  marketCap: 235278537,
  id: 5
},
{
  image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph",
  marketName: "RHS",
  price: "$500",
  change: "-12",
  marketCap: 235278537,
  id: 6
},
{
  image: "https://img.freepik.com/free-psd/freshly-baked-pizza-with-cut-slice-isolated-transparent-background_191095-9041.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703548800&semt=sph",
  marketName: "LHS",
  price: "$600",
  change: "-8",
  marketCap: 235278537,
  id: 7
}]


export default function NavigateView() {
  console.log("Navigation execute....");
  const layout = useWindowDimensions();

  

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Market' },
    { key: 'second', title: 'Recents' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: 'white' }}
      activeColor="black"
      inactiveColor="grey"

    />
  );
  
  return (

    <View style={stockStyle.lastViewcontainer}>
      <TabView renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

const FirstRoute = () => {
  const [_,setPrice] = useContext(AppDataContext);
  const [stocklist, setData] = useState(ItemList);
    let timer = 0;
    let exeTimer = 0;

  handleSearch = (searchText) => {
    console.log(searchText)
    const datacopy = ItemList.filter(
      (item) => item.marketName.toLowerCase().includes(searchText.toLowerCase())
    )
    setData(datacopy);
  }

  setDebounce = (searchText) => {
    exeTimer+=1
     delay(() => {
      if (timer == exeTimer) {
        handleSearch(searchText)
        console.log(setDebounce)
      }
     })
  }

  function delay(callback)  {
    setTimeout(() => {
      timer += 1
      callback();
    }, 1000);
  }

  function callBackData(data) {
   setPrice(data);
  }

  const handlePress = (value) => {
    setPrice(value)
   console.log(value)

  }

  const handlePriceSet = useCallback((value) => {
     setPrice(value);
  },[])

  const renderItem = ({ item }) => (<ListView data={item}
    toSetData={handlePriceSet}
    />);
  return (
 
  <View style={{ flex: 1, backgroundColor: 'white' }} >
    <View style={{ marginTop: 15 }}>
      <Text style={{ marginLeft: 15 }}> Manage your crypto market active </Text>
      <View style={stockStyle.searchBackGroundView}>
        <Image
          style={stockStyle.searchIconImg}
          source={{
            uri: "https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_1280.png",
          }}>
        </Image>

        <TextInput
          style={stockStyle.searchStyle}
          onChangeText={(text) => setDebounce(text)}
          placeholder='Search your choice'
          placeholderTextColor="#616161"
          numberOfLines={1}
          enterKeyHint="done"
        >
        </TextInput>
      </View>
      <View style={stockStyle.flatTopList}>
        <View>
          <Text style={{ fontSize: 12 }}>Market</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>Price</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>Change</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>Market cap</Text>
        </View>

      </View>
      <FlatList
        style={{ marginRight: 10, top: 6 }}
        bounces={false}
        data={stocklist}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false} >
      </FlatList>

    </View>
  </View>
);
        }

memo(FirstRoute);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

memo(SecondRoute)

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

memo(NavigateView);
