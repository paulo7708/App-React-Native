import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ExplanationCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Através deste APP você vai consolidar 4 hábitos de áreas fundamentais:
      </Text>


      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/educationIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.mind}>
            Mente: Hábitos para melhorar sua Espiritualidade/inteligência/Sabedoria.
          </Text>
        </Text>
      </View>


      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/moneyIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.money}>
            Financeiro: Hábitos para ter controle financeiro.
          </Text>
        </Text>
      </View>


      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/bodyIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.body}>
            Corpo: Hábitos para ter saude.
          </Text>
        </Text>
      </View>


      <View style={styles.explanationContainer}>
        <Image
          source={require("../../../assets/icons/funIcon.png")}
          style={styles.icon}
        />
        <Text style={styles.description}>
          <Text style={styles.fun}>
            Humor: Hábitos para Relaxar.
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151515",
    width:350,
    borderRadius:25,
    padding: 30,
  } ,
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  explanationContainer: {
    flexDirection: "row",
    marginTop: 30,
  },

  icon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },

  mind: {
    color: "#90b7f3",
    fontWeight: "bold",
  },

  money: {
    color: "#85bb65",
    fontWeight: "bold",
  },

  body: {
    color: "#ff0044",
    fontWeight: "bold",
  },

  fun: {
    color: "#fe7f23",
    fontWeight: "bold",
  },

  description: {
    color: "white",
  }
})
