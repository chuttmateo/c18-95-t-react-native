import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const TranslationListGame = () => {
  const data = {
    id: 1,
    sublectionTitle: 'Pronombres',
    prompt: 'Escribe en inglés',
    questions: [
      { word: "Yo", correctTranslation: "i" },
      { word: "Tú", correctTranslation: "you" },
      { word: "Él", correctTranslation: "he" },
      { word: "Ella", correctTranslation: "she" },
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
           <Text style={{ textAlign: "center" , fontSize: 30}}>{data.sublectionTitle}</Text>
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
                 <Text style={{ width: 80 }}>{item.word}</Text>
                 <Text>-</Text>
                 <TextInput
                   style={{
                     width: 80,
                     borderWidth: 1,
                     textAlign: "center",
                     borderColor: "green",
                     borderRadius: 10,
                     backgroundColor: '#cacaca'
                   }}
                 />
                 <Text>check</Text>
               </View>
             )}
           />
         </View>
         <View
           style={{
             flex: 1,
             alignItems: "center",
             flexDirection: "row",
             justifyContent: "space-evenly",
           }}
         >
           <TouchableOpacity onPress={() => navigator.navigate()}>
             <Text>CHECK</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigator.navigate()}>
             <Text>NEXT</Text>
           </TouchableOpacity>
         </View>
       </View>
     </SafeAreaView>
   );
}

export default TranslationListGame

const styles = StyleSheet.create({})