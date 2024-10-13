import { TouchableOpacity, View } from "react-native";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";

const bottomSpace = getBottomSpace(true);

const TabButton = ({
  isSelected,
  onPress,
  activeIconName,
  inactiveIconName,
  isIconFontista,
  isIconIonicons,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      {isIconFontista && (
        <Fontisto
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color={isSelected ? "black" : "black"}
        />
      )}
      {isIconIonicons && (
        <Ionicons
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color={isSelected ? "black" : "lightgrey"}
        />
      )}
    </TouchableOpacity>
  );
};

export default ({ selectedTabIdx, setSelectedTabIdx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        // paddingBottom: bottomSpace,
        paddingBottom: bottomSpace + 20,
        borderTopWidth: 0.5,
        borderTopColor: "grey",
      }}
    >
      <TabButton
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectedTabIdx(0)}
        activeIconName="person"
        inactiveIconName="persons"
        isIconFontista
      />

      <TabButton
        isOtherBgColor
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectedTabIdx(1)}
        activeIconName="chatbubbles"
        inactiveIconName="chatbubbles-outline"
        isIconIonicons
      />

      <TabButton
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectedTabIdx(2)}
        activeIconName="pricetag"
        inactiveIconName="pricetag-outline"
        isIconIonicons
      />

      <TabButton
        isSelected={selectedTabIdx === 3}
        onPress={() => setSelectedTabIdx(3)}
        activeIconName="add-circle"
        inactiveIconName="add-circle-outline"
        isIconIonicons
      />
    </View>
  );
};
