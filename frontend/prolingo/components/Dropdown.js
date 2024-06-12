import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Dropdown = ({ items, onValueChange }) => {
     const [selectedValue, setSelectedValue] = useState("apple");
  return (
    <View style={styles.container}>
      <Picker 
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.picker}
        mode="dropdown" // Android only
      >
        {items.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
  },
  picker: {
        width: 150,
        backgroundColor: '#cacaca',
    padding: 0
  },
});

export default Dropdown;
