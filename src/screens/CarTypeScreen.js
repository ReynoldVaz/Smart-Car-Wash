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
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import BackButton from '../components/BackButton'
import React, { useState } from 'react'

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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'SUV',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sedan',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Hatchback',
  },
]

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
)

const CarTypeScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null)

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'lightgray' : 'white'

    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('MyDrawer', {
            screen: 'Home',
            params: { selectedCarType: item },
          })
        }
        style={{ backgroundColor }}
      />
    )
  }

  return (
    <View>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MyDrawer')}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {'X'}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize: 20,
          }}
        >
          Select Car Type
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
    </View>
  )
}

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
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
  },
  button: {
    paddingHorizontal: 30,
  },
})

export default CarTypeScreen
