import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkbox from '../Checkbox';

const SelectionGame = () => {
     const data = {
         id: 1,
         sublessonTitle: 'Sustantivos',
         prompt: '¿Cuál no es un sustantivo?',
       options: [
         { word: "Book", correctTranslation: "Libro" },
         { word: "Apple", correctTranslation: "Manzana" },
         { word: "City", correctTranslation: "Ciudad" },
         { word: "Eat", correctTranslation: "Comer" },
       ],
     };  
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
          <Text style={{ textAlign: "center", fontSize:30 }}>{data.sublessonTitle}</Text>
          <Text style={{ textAlign: "center" }}>{data.prompt}</Text>
        </View>
        <View style={{ flex: 6 }}>
          <FlatList
            data={data.options}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
              >
                <Checkbox />
                <Text style={{ width: 80 }}>{item.word}</Text>
                <Text style={{ width: 80 }}>({item.correctTranslation})</Text>

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
    </SafeAreaView>
  );
}

export default SelectionGame

const styles = StyleSheet.create({})