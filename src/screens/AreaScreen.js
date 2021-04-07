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
} from 'react-native'

import React, { useState } from 'react'

const DATA = [
  {
    id: '1',
    title: 'Margao',
  },
  {
    id: '2',
    title: 'Vasco',
  },
  {
    id: '3',
    title: 'Panjim',
  },
  {
    id: '4',
    title: 'Bicholim',
  },
  {
    id: '5',
    title: 'Canacona',
  },
  {
    id: '6',
    title: 'Cuncolim',
  },
  {
    id: '7',
    title: 'Mapusa',
  },
  {
    id: '8',
    title: 'Ponda',
  },
  {
    id: '9',
    title: 'Quepem',
  },
  {
    id: '10',
    title: 'Sanquelim',
  },
]

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
)

const AreaScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null)

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'lightgray' : 'white'

    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('MyDrawer', {
            screen: 'Home',
            params: { selectedArea: item },
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
            X
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize: 20,
          }}
        >
          Select Area
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
    paddingTop: 30,
  },
  container1: {
    paddingTop: 45,
  },

  item: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  button: {
    paddingHorizontal: 30,
  },
})

export default AreaScreen
