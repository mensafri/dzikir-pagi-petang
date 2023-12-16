import { StyleSheet, Text, View, ScrollView } from "react-native";
import PagerView from "react-native-pager-view";
import { DzikirPagi as data } from "../data/pagi";
import React, { Fragment } from "react";
import { screenHeight, screenWidth } from "../constants/scale";
import * as Progress from "react-native-progress";

export default function DzikirPagi() {
  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <Text>Dzikir Pagi</Text>
      </View>
      <View style={{ backgroundColor: "white" }}></View>
      <PagerView initialPage={0} style={styles.pagerContainer}>
        {data.map((item, index) => (
          <Fragment key={item.no}>
            <Progress.Bar
              progress={((index + 1) / data.length) * 100}
              width={screenWidth}
            />
            <View>
              <Text>Dibaca {item.jumlah} kali</Text>
            </View>
            <View key={item.no}>
              <ScrollView>
                <Text>{item.arab}</Text>
                <Text>{item.indo}</Text>
                <Text>{item.dalil}</Text>
              </ScrollView>
            </View>
          </Fragment>
        ))}
      </PagerView>
      <View></View>
    </>
  );
}

const styles = StyleSheet.create({
  pagerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});
