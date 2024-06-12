import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Checkbox = ({  label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
      <Icon
        name={isChecked ? "checkbox-marked-outline" : "checkbox-blank-outline"}
        size={24}
        color="#000"
      />
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginLeft: 10,
  },
});

export default Checkbox;
