//import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native'
import BackButton from '../components/BackButton'
import React, { useState } from 'react'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { Divider, Headline, Drawer } from 'react-native-paper'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import AreaScreen from './AreaScreen'
import CarTypeScreen from './CarTypeScreen'

const HomeScreen1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}

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

    export default AreaScreen
    
    <Button
              style={[{ width: '50%' }]}
              mode="contained"
              onPress={() => navigation.navigate('HomeScreenTrial')}
            >
              Drawer
            </Button>
    */
}
const DATA = [
  {
    id: '1',
    title: 'Sparkle And Shine ',
  },
  {
    id: '2',
    title: 'Sai Car Washing Centre',
  },
  {
    id: '3',
    title: "Sunny's Washing Centre",
  },
  {
    id: '4',
    title: "Sunny's Washing Centre",
  },
  {
    id: '5',
    title: "Sunny's Washing Centre",
  },
  {
    id: '6',
    title: "Sunny's Washing Centre",
  },
  {
    id: '7',
    title: "Sunny's Washing Centre",
  },
  {
    id: '8',
    title: "Sunny's Washing Centre",
  },
]

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
)

const HomeScreen = ({ route, navigation }) => {
  const [active, setActive] = React.useState('')
  const [selectedId, setSelectedId] = useState(null)

  const [area, setSelectedArea] = useState(null)
  const [carType, setSelectedCarType] = useState(null)

  try {
    if (typeof route === 'object' && route !== null) {
      if ('selectedArea' in route.params) {
        // alert(route.params.selectedArea.title);
        if (route.params.selectedArea != null) {
          if (area == null) {
            setSelectedArea(route.params.selectedArea)
          } else {
            if (area.id != route.params.selectedArea.id) {
              setSelectedArea(route.params.selectedArea)
            }
          }
        }
      }
    }

    if (route.params.selectedCarType != null) {
      if ('selectedCarType' in route.params) {
        // alert(route.params.selectedCarType.title);

        if (carType == null) {
          setSelectedCarType(route.params.selectedCarType)
        } else {
          if (carType.id != route.params.selectedCarType.id) {
            setSelectedCarType(route.params.selectedCarType)
          }
        }
      }
    }
  } catch (err) {
    console.error(err)
    // alert(err);
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'lightgray' : 'white'

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('CarCentreScreen')}
        style={{ backgroundColor }}
      />
    )
  }

  return (
    <ScrollView style={styles.container1}>
      {area == null ? (
        <Button
          style={[{ width: '50%', marginHorizontal: 90 }]}
          mode="contained"
          onPress={() => navigation.navigate('AreaScreen')}
        >
          Area
        </Button>
      ) : (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',

            // marginVertical: 10,
          }}
        >
          <Button
            style={[{ width: '50%', marginHorizontal: 90 }]}
            mode="contained"
            onPress={() => {
              route.params.selectedArea = null
              setSelectedArea(null)
            }}
          >
            {area.title} {'       '} x
          </Button>
        </View>
      )}

      {carType == null ? (
        <Button
          style={[{ width: '50%', marginHorizontal: 90 }]}
          //style={[{ align: 'centre' }]}
          mode="contained"
          onPress={() => navigation.navigate('CarTypeScreen')}
        >
          Car Type
        </Button>
      ) : (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            // marginVertical: 10,
          }}
        >
          <Button
            style={[{ width: '50%', marginHorizontal: 90 }]}
            mode="contained"
            onPress={() => {
              route.params.selectedCarType = null
              setSelectedCarType(null)
            }}
          >
            {carType.title}
            {'        '} x
          </Button>
        </View>
      )}

      <FlatList
        style={{
          // textAlignVertical: 'center',
          // textAlign: 'center',
          fontSize: 30,
          marginRight: 15,
          // paddingTop: 30,
        }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container1: {
    //flex: 1,
    //marginTop: StatusBar.currentHeight || 0,

    //paddingTop: 45,
    paddingTop: 30,
    paddingLeft: 20,
    alignContent: 'center',
  },
  container2: {
    alignItems: 'center',
    paddingTop: 20,
    padding: 10,
  },
  container3: {
    paddingTop: 5,

    //alignItems: 'center',
  },

  item: {
    paddingHorizontal: 10,
    //alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 4,
    marginHorizontal: 2,
  },
  title: {
    fontSize: 15,
  },
  button: {
    paddingHorizontal: 30,
  },
})

export default HomeScreen
