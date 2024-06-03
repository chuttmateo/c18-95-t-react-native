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
import { useNavigation } from "@react-navigation/native";

const ListItem = ({ item }) => {
  const navigator = useNavigation();
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
        onPress={() => navigator.navigate("teory")}
        style={{
          height: 70,
          ...defaultStyles.container,
          borderColor: "gold",
          borderWidth: 3,
          borderRadius: 30,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
      </TouchableOpacity>
      <View style={defaultStyles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.order}</Text>
      </View>
    </View>
  );
};

const sublevel = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ flex: 1, borderColor: "black", borderWidth: 2, margin: "5%" }}
      >
        <FlatList
          data={[
            { id: 1, name: "Pronombres", order: 1 },
            { id: 2, name: "Sustantivos", order: 2 },
            { id: 3, name: "Adjetivos", order: 3 },
            { id: 4, name: "Verbos", order: 4 },
            { id: 5, name: "Artículos", order: 5 },
            { id: 6, name: "Preposiciones", order: 6 },
            { id: 7, name: "Adverbios", order: 7 },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default sublevel;

const styles = StyleSheet.create({});
