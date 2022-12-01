import React from "react";
import { View } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";

export default function AppExplanation() {
  function handleSetShowHome(){
    console.log('botao clicado');
  }


  return (
    <View style={{ alignItens: "center" }}>
      <Text style={StyleSheet.title}>
        Antes, deixa {"\n"} eu te explicar...
      </Text>
      <Text style={StyleSheet.description}>
        Pronto para subir de nível na vida?
      </Text>
      <Text style={StyleSheet.description}>
        Na próxima tela você vai poder escolherseus hábitos de forma individual.
      </Text>
      <DefaultButton
        buttonText={"Continuar"}
        handlePress={handleSetShowHome}
        width={250}
        height={50}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "rgba(21,21,21,0.98)",
  },
  title:{
    fontSize:30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical:40,
  },
  descriptionCta: {
    color:"white",
    fontWeight: "bold",
    fontSize: 16,
    marginTop:20,
    marginBottom:10,
  },
  description: {
    color:"white",
    textAlign: "center",
    marginBottom: 30,
  }
});
