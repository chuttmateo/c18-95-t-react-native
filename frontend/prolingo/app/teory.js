import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { getLection } from "./services/lection";

const Page = ({item}) => (
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
      <Text style={{ textAlign: "center" }}>{item.title}</Text>
      <Text style={{ textAlign: "center" }}>TITLE TRADUCTION</Text>
    </View>
    <View style={{ flex: 4, justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>{item.description}</Text>
      
    </View>
    
  </View>
);
const teory = () => {
  const route = useRoute();
  const { lectionID } = route.params;
  const [subLessons, setSubLessons] = useState([]);

  useEffect(() => {
    getLection(lectionID, setSubLessons);
  }, [])
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={subLessons}
        renderItem={({ item }) => <Page item={item} />}
      />
    </SafeAreaView>
  );
};

export default teory;

const styles = StyleSheet.create({});
