import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import level from "../constants/level";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getLevel } from "./services/level";

const LevelScreen = () => {
  const navigator = useNavigation();
  const route = useRoute();
  const { index } = route.params;
  const [nivel, setNivel] = useState([]);

  useEffect(() => {
    getLevel(index, setNivel);
  }, []);

  
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={level.bg} resizeMode="contain" style={styles.bg}>
        <ImageBackground
          source={level.bg2}
          resizeMode="stretch"
          style={styles.bg2}
        >
          <ImageBackground
            source={level.header_bg}
            style={styles.header_bg}
            resizeMode="contain"
          >
            <Text style={styles.header}>Nivel 1</Text>
          </ImageBackground>
          <View style={styles.introduction}>
            <Text style={styles.text}>{nivel.description}</Text>
            {/* <Text style={styles.text}>
              Serán necesarias para armar oraciones más adelante.
            </Text> */}
            <TouchableOpacity
              onPress={() => navigator.navigate("sublevel", { lections: nivel.lessons })}
              style={styles.btn_cnt}
            >
              <Image source={level.arrow} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LevelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
  bg2: {
    flex: 1,
    margin: "7%",
    // backgroundColor: "gray",
    // opacity: 0.5,
  },
  header_bg: {
    // backgroundColor: "green",
    // opacity: 0.5,
    flex: 1,
    justifyContent: "center",
  },
  introduction: {
    // backgroundColor: "blue",
    // opacity: 0.5,
    flex: 2,
    paddingHorizontal: "15%",
    gap: 5,
  },
  header: {
    textAlign: "center",
    fontSize: 50,
    fontFamily: "Satisfy",
  },
  text: {
    fontSize: 25,
    fontFamily: "Satisfy",
    textAlign: "center",
  },
  btn_cnt: {
    alignItems: "center",
    // backgroundColor: 'red',
    // opacity: 0.5
  },
});
