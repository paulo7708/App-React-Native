import React from "react";
import { View, StyleSheet, Image} from "react-native";
import { ProgressBar } from "react-native-paper";
import LifeStatus from "../../Common/LifeStatus";

export default function StatusBar(){
  return(
    <View style={styles.container}>

      <View style={styles.StatusBarContainer}>
        <Image
          source={require("../../../assets/icons/educationIcon.png")}
          style={styles.icon}
        />
      </View>
      <ProgressBar progress={1} color={"#90b7f3"} style={styles.progress} />

      <View style={styles.StatusBarContainer}>
        <Image
          source={require("../../../assets/icons/moneyIcon.png")}
          style={styles.icon}
        />
      </View>
      <ProgressBar progress={0} color={"#85bb65"} style={styles.progress} />

      <View style={styles.StatusBarContainer}>
        <Image
          source={require("../../../assets/icons/bodyIcon.png")}
          style={styles.icon}
        />
      </View>
      <ProgressBar progress={0} color={"#ff0043"} style={styles.progress} />

      <View style={styles.StatusBarContainer}>
        <Image
          source={require("../../../assets/icons/funIcon.png")}
          style={styles.icon}
        />
      </View>
      <ProgressBar progress={0} color={"#fe7f23"} style={styles.progress} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    backgroundColor: "#151515",
    borderRadius: 10,
    marginTop: 10,
    marginBottom:10,
  },
  StatusBarContainer:{
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  progress:{
    borderRadius: 10,
    width:250,
    height: 8,    
  },
  icon: {
    width:25,
    height:25,
    MarginRight: 5,
  },
})