import React, {memo} from "react";
import { stockStyle } from "./StylingForm";
import { Text, View, Image, TouchableOpacity } from "react-native";

function Header() {
  console.log("Header execute....")
  return (
    <View style={stockStyle.headerContainer}>
      <View style={stockStyle.headerLeftView}>
        <TouchableOpacity>
          <Image
            style={stockStyle.sideMenuImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2951/2951552.png"
            }}>
          </Image>
        </TouchableOpacity>

      </View>
      <View style={stockStyle.headerRightView}>
        <TouchableOpacity>
          <Image
            style={stockStyle.sideMenuImage}
            source={{
              uri: "https://w7.pngwing.com/pngs/106/710/png-transparent-computer-icons-symbol-icon-design-google-plus-miscellaneous-blue-logo.png"
            }}>
          </Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={stockStyle.sideMenuImage}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6645/6645163.png"
            }}>
          </Image>
        </TouchableOpacity>
        <Image
          style={stockStyle.sideMenuImage}
          source={{
            uri: "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
          }}>
        </Image>
      </View>
    </View>
  );
};

export default memo(Header);