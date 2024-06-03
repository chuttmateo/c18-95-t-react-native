import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => (
  <View
    style={{
      flex: 1,
      margin: "10%",
      borderColor: "black",
      borderWidth: 5,
            backgroundColor: "white",
            paddingVertical: '5%'
    }}
  >
    <View
      style={{
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        marginHorizontal: "5%",
        justifyContent: "center",
        position: "relative",
        top: '-30%',
        backgroundColor: "white",
      }}
    >
      <Text style={{ textAlign: "center" }}>TITLE</Text>
      <Text style={{ textAlign: "center" }}>TITLE TRADUCTION</Text>
    </View>
    <View style={{ flex: 4, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>BODY 1</Text>
      <Text style={{ textAlign: "center" }}>BODY 2</Text>
      <Text style={{ textAlign: "center" }}>BODY 3</Text>
      <Text style={{ textAlign: "center" }}>BODY 4</Text>
    </View>
    
  </View>
);
const teory = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        renderItem={({ item }) => <Page />}
      />
    </SafeAreaView>
  );
};

export default teory;

const styles = StyleSheet.create({});
