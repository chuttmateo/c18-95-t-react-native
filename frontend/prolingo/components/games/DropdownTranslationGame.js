import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Dropdown from "../Dropdown";

const DropdownTranslationGame = () => {
  const data = {
    id: 1,
    sublessonTitle: 'Verbos',
    prompt: "Selecciona la traducción",
    options: ["Comer", "Escribir", "Correr", "Ser/Estar"],
    questions: [
      { word: "Eat", correctWord: "Comer" },
      { word: "Write", correctWord: "Escribir" },
      { word: "Run", correctWord: "Correr" },
      { word: "Be", correctWord: "Ser/Estar" },
    ],
  };

  const items = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  return (
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
        <Text style={{ textAlign: "center", fontSize: 30 }}>{data.sublessonTitle}</Text>
        <Text style={{ textAlign: "center" }}>{data.prompt}</Text>
      </View>
      <View style={{ flex: 6 }}>
        <FlatList
          data={data.questions}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginVertical: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ width: 80 }}>{item.word}</Text>

              <Dropdown items={data.options} />

              <Text>check</Text>
            </View>
          )}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity>
          <Text>BOTON</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropdownTranslationGame;

const styles = StyleSheet.create({});
