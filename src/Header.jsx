import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ name, bgColor }) => {
  return (
    <TouchableOpacity
      hitSlop={{ top: 10, bottom: 10 }}
      style={{ paddingHorizontal: 6, backgroundColor: bgColor }}
    >
      <Ionicons name={name} size={24} color="black" />
    </TouchableOpacity>
  );
};

const Hedaer = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton name={"search-outline"} />
        <IconButton name={"person-add-outline"} />
        <IconButton name={"musical-notes-outline"} />
        <IconButton name={"settings-outline"}  />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Hedaer;
