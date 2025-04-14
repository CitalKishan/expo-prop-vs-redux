import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function RGreatGrandChild() {
  console.log("GreatGrandChild Redux is rendered!");
  const seconds = useSelector((state: RootState) => state.seconds);
  return (
    <View>
      <Text>rGreatGrandChild Seconds: {seconds}</Text>
    </View>
  );
}
