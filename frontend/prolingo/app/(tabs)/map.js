import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import map from "@/constants/map";
import { useNavigation } from "@react-navigation/native";
import { getAllLevels } from "../services/level";

const explore = () => {
  const navigator = useNavigation();
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    getAllLevels(setLevels);
  }, []);

  useEffect(() => {
    // getAllLevels(setLevels);
    console.log("LEVELS :", levels);
  }, [levels]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.mainBackground}
          resizeMode="contain"
          source={map.mainBackground}
        >
          <View style={styles.instructionContainer}>
            <ImageBackground
              source={map.instructionBackground}
              resizeMode="contain"
              style={styles.instructionBackground}
            >
              <Text style={styles.text}>
                Los{" "}
                <Image source={map.yellowCircle} style={styles.iconInText} />{" "}
                son lecciones
              </Text>
              <Text style={styles.text}> desbloqueados con cada avance.</Text>
              <Text style={styles.text}>
                Los <Image source={map.redSymbol} style={styles.iconInText} />{" "}
                son tests
              </Text>
            </ImageBackground>
          </View>

          <View style={styles.mapContainer}>
            <ImageBackground
              source={map.mapBackground}
              resizeMode="contain"
              style={styles.mapBackground}
            >
              <View style={styles.pathContainer}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.path}
                  source={map.path}
                >
                  <FlatList
                    data={levels}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <>
                        <TouchableOpacity
                          onPress={() => navigator.navigate("level", { index : item.id })}
                        >
                          <Image
                            style={styles.iconInMap}
                            source={map.blueCircle}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => navigator.navigate("game", { item })}
                        >
                          <Image
                            style={styles.iconInMap}
                            source={map.blueSymbol}
                          />
                        </TouchableOpacity>
                      </>
                    )}
                  />
                </ImageBackground>
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  instructionContainer: {
    height: "25%",
  },
  mapContainer: {
    marginTop: 15,
    height: "70%",
  },
  pathContainer: {
    height: "100%",
    marginTop: "10%",
  },
  path: {
    flex: 1,
  },
  mainBackground: {
    height: "100%",
    width: "100%",
  },
  instructionBackground: {
    height: "90%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mapBackground: {
    height: "100%",
  },
  header: {
    fontSize: 50,
    color: "#daa520",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Satisfy",
  },
  iconInText: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
  iconInMap: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginHorizontal: "auto",
    marginVertical: 20,
  },
});

export default explore;
