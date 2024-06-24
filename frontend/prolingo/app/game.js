import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import sublevel from "./sublevel";
import { useNavigation } from "@react-navigation/native";

const GameScreen = () => {
    const navigator = useNavigation();
  const [games, setGames] = useState([]);
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, borderWidth: 2, margin: "5%" }}>
        <View
          style={{
            flex: 2,
            borderWidth: 5,
            borderColor: "gold",
            margin: "10%",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>TITLE</Text>
        </View>
        <View style={{ flex: 6 }}>
          <Text style={{ textAlign: "center" }}>BODY</Text>
        </View>
        <View style={{ flex: 1, alignItems:'center' }}>
                  <TouchableOpacity
                  onPress={()=> navigator.navigate('exercise')}
                  ><Text>BOTON</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
