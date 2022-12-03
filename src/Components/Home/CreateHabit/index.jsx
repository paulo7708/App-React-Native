import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


export default function CreateHabit({ habitArea, borderColor}) {

  function handleCreate(){
    console.log(`botão da area clicado ${habitArea}`)
  }
  return(
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, {borderColor: borderColor}]}
      onPress={handleCreate}
    >
      <Text style={styles.habitTitle}>
        Adicionar hábito {habitArea === "Mente" ? "da" : "do"} {habitArea}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width:300,
    marginVertical:5,
    paddingVertical:5,
    paddingHorizontal:10,
    borderWidth:2,
    borderStyle:"dotted",
    borderColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  habitTitle: {
    color:"white",
    fontSize: 16,
    fontweight:"bold",
  }
})