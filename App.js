import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "./src/Header";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import TabBar from "./src/TabBar";
import Profile from "./src/Profile";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const renderItem = ({ item }) => (
    <Profile uri={item.uri} name={item.name} introduction={item.introduction} />
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
    </View>
  );

  const ListFooterComponent = () => null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left", "top"]}>
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingBottom: bottomSpace + 20,
          }}
          keyExtractor={(item, index) => index}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={() => <Margin height={13} />}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showVerticalScrollIndicator={false}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left", "top"]}>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Header />
          <Margin height={10} />
          <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
          />
          <Margin height={15} />
          <Division />
          <Margin height={12} />
          <FriendSection
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpened={isOpened}
          />

          <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
