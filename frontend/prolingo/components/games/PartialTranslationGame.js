import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PartialTranslationGame = () => {
   const data = {
     id: 1,
     sublessonTitle: 'Adjetivos',
     prompt: "Termina de escribir",
     questions: [
       { spanishWord: 'Azul', partialWord: "B", completeWord: "Book" },
       { spanishWord: 'Rojo', partialWord: "R", completeWord: "Red" },
       { spanishWord: 'Muchos', partialWord: "M", completeWord: "Many" },
       { spanishWord: 'Favorita', partialWord: "Favo", completeWord: "Favorite" },
     ],
   };  
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
        <Text style={{ textAlign: "center" , fontSize: 30}}>{data.sublessonTitle}</Text>
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
              }}
            >
              <Text style={{ width: 80 }}>{item.spanishWord}</Text>
              <Text>-</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>{item.partialWord}</Text>
                <TextInput style={{ backgroundColor: "#cacaca", width: 40 }} />
              </View>

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
}

export default PartialTranslationGame

const styles = StyleSheet.create({})