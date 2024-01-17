import { Text,View } from "react-native";
import { graphStyle } from "./StyleSheet";

export default function DotView(yposn) {
console.log(yposn.posn)
 return(
     <View style= {graphStyle(yposn.posn.bloodPressure).dotView}>
     </View>
    )
};