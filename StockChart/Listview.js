import React, { useContext } from "react";
import { Text,View, StyleSheet,Image, TouchableOpacity } from "react-native";
import { stockStyle } from "./StylingForm";
import AppDataContext from "./Context";

export default function ListView({data}){

   const [_, setPrice ] = useContext(AppDataContext);

    const onClick = (item) => {
        console.log(item);
        setPrice(item.price);
        item.marketCap = item.marketCap + 2
    }

    return (

     <TouchableOpacity onPress={() => onClick(data)}>
       <View style={stockStyle.listContainerView}>
      
        <Image
          style = {{height: 20, width: 20, borderRadius:10,marginLeft:10, marginRight:0}}
              source={{
                  uri: data.image
                }}>
       </Image>
       <View style={stockStyle.listContainerView}>
       <View > 
             <Text style={{fontSize: 12}}>{data.marketName}</Text>
          </View>
          <View>
             <Text style={{fontSize: 12}}>{data.price}</Text>
          </View>
          <View>
             <Text style={{fontSize: 12}}>{data.change}</Text>
          </View>
          <View>
             <Text style={{fontSize: 12}}>{data.marketCap}</Text>
          </View>
       </View>
        

       </View>
       </TouchableOpacity>
    );
};