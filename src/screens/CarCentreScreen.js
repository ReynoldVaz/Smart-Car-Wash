//import React from 'react'
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
} from "react-native";
import BackButton from "../components/BackButton";
import React, {useState} from "react";
import {
  Checkbox,
  Colors,
  TouchableRipple,
  List,
  useTheme,
} from "react-native-paper";

{
  /*const AreaScreen = ({ navigation }) => (
  <Background>
    {/*<Logo />
    <Text>Select Area</Text>
    <Paragraph>You starts here.</Paragraph>
    <Button
      mode="outlined"
      onPress={() =>
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }
    >
      back
    </Button>
  </Background>
)

    export default AreaScreen*/
}
const DATA = [
  {
    id: "1",
    title: "Street address",
  },
];

const Item = ({item, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const CarCentreScreen = ({navigation}) => {
  const [checkedNormal, setCheckedNormal] = React.useState(true);
  const [checkedCustom1, setCheckedCustom1] = React.useState(false);
  const [checkedCustom2, setCheckedCustom2] = React.useState(false);
  const [checkedCustom3, setCheckedCustom3] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const {
    colors: {background},
  } = useTheme();
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? "lightgray" : "white";

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("MyDrawer")}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <View>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MyDrawer")}>
          <Text
            style={{
              fontSize: 20,
            }}>
            {"X"}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            fontSize: 20,
          }}>
          Centre Name
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
      <Button
        style={[
          {
            width: "50%",

            marginVertical: 20,
            marginHorizontal: 100,
          },
        ]}
        mode="contained"
        onPress={() => navigation.navigate("CarCentreScreen")}>
        Time slot
      </Button>
      <View
        style={[
          styles.container2,
          {
            backgroundColor: background,
          },
        ]}>
        <List.Section title="Services"></List.Section>
        <TouchableRipple onPress={() => setCheckedCustom1(!checkedCustom1)}>
          <View style={styles.row}>
            <Paragraph>Foam Wash</Paragraph>
            <View pointerEvents="none">
              <Checkbox
                color={Colors.blue500}
                status={checkedCustom1 ? "checked" : "unchecked"}
              />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => setCheckedCustom2(!checkedCustom2)}>
          <View style={styles.row}>
            <Paragraph>Diesel Wash</Paragraph>
            <View pointerEvents="none">
              <Checkbox
                color={Colors.blue500}
                status={checkedCustom2 ? "checked" : "unchecked"}
              />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => setCheckedCustom3(!checkedCustom3)}>
          <View style={styles.row}>
            <Paragraph>Foam Wash</Paragraph>
            <View pointerEvents="none">
              <Checkbox
                color={Colors.blue500}
                status={checkedCustom3 ? "checked" : "unchecked"}
              />
            </View>
          </View>
        </TouchableRipple>

        <Button style={styles.button1} mode="contained" onPress={() => {}}>
          Book A Wash
        </Button>

        {/*} <TouchableRipple onPress={() => setIndeterminate(!indeterminate)}>
          <View style={styles.row}>
            <Paragraph>Indeterminate</Paragraph>
            <View pointerEvents="none">
              <Checkbox
                status={indeterminate ? 'indeterminate' : 'unchecked'}
              />
            </View>
          </View>
        </TouchableRipple>

        <View style={styles.row}>
          <Paragraph>Checked (Disabled)</Paragraph>
          <Checkbox status="checked" />
        </View>
        <View style={styles.row}>
          <Paragraph>Unchecked (Disabled)</Paragraph>
          <Checkbox status="unchecked" disabled />
        </View>
        <View style={styles.row}>
          <Paragraph>Indeterminate (Disabled)</Paragraph>
          <Checkbox status="indeterminate" disabled />
      </View>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    paddingTop: 30,
    paddingHorizontal: 60,
  },
  container1: {
    //flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
    paddingTop: 40,
  },

  item: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 15,
  },
  button: {
    paddingHorizontal: 40,
  },
  button1: {
    paddingHorizontal: 0,
  },
  container2: {
    //flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
    paddingHorizontal: 30,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default CarCentreScreen;
