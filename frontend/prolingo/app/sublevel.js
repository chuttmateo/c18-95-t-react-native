import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { defaultStyles } from "../styles/index";
import { useNavigation, useRoute } from "@react-navigation/native";

const ListItem = ({ item }) => {
  const navigator = useNavigation();
  console.log('sublecciones : ', item)
  return (
    <View
      style={{
        // backgroundColor: "red",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: "5%",
        padding: "5%",
      }}
    >
      <TouchableOpacity
        onPress={() => navigator.navigate("teory", {lectionID: item.id})}
        style={{
          height: 70,
          ...defaultStyles.container,
          borderColor: "gold",
          borderWidth: 3,
          borderRadius: 30,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
      </TouchableOpacity>
      <View style={defaultStyles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.id}</Text>
      </View>
    </View>
  );
};

const sublevel = () => {
  const route = useRoute();
  const { lections } = route.params;
  // console.log("ESTas Lecciones:\n", items);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flex: 1, borderColor: "black", borderWidth: 2, margin: "5%" }}
      >
        <FlatList
          data={lections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default sublevel;

const styles = StyleSheet.create({});
