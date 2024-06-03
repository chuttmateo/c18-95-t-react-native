import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { defaultStyles } from "../../styles/index";

const ListItem = ({ item }) => (
  <View style={styles.listItem}>
    <View style={defaultStyles.container}>
      <Text style={styles.positionText}>{item.position}</Text>
    </View>
    <View style={{ ...defaultStyles.container, gap: 10 }}>
      <Image style={styles.userImage} source={{ uri: item.image }} />
      <Text>{item.name}</Text>
    </View>
    <View style={defaultStyles.container}>
      <Text style={styles.text}>{item.score} PTS</Text>
    </View>
  </View>
);
const ranking = () => {
  return (
    <SafeAreaView style={{ paddingTop: 30 }}>
      <View style>
        <FlatList
          data={[
            {
              id: 1,
              position: 1,
              name: "Alí",
              score: 60,
              image: "https://art.pixilart.com/thumb/8180be903f3d75c.png",
            },
            {
              id: 3,
              position: 2,
              name: "Mateo",
              score: 59,
              image:
                "https://i.pinimg.com/originals/e5/6e/19/e56e19905c0c4dc6cadba76ac765a96b.jpg",
            },
            {
              id: 4,
              position: 2,
              name: "Yoel",
              score: 58,
              image:
                "https://i.pinimg.com/originals/84/3b/6b/843b6b77f46c1c3a69091d13fa9593d7.jpg",
            },
          ]}
          renderItem={({ item }) => <ListItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "red",
    // opacity: 0.5,
    marginHorizontal: "10%",
    marginVertical: "5%",
    borderStyle: "dashed",
    borderWidth: 4,
    borderColor: "black",
    paddingVertical: "5%",
  },
  positionText: {
    fontSize: 50,
    fontWeight: "bold",
  },
  userImage: {
    height: 60,
    width: 60,
  },
  text: {
    fontSize: 20,
  },
});

export default ranking;
