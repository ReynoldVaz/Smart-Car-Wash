import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { theme } from '../core/theme'

function Help() {
  return (
    <View>
      <Text
        style={{
          marginLeft: 130,
          marginTop: 150,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 20,
        }}
      >
        Visit Our Website :{'\n'}
        {'\n'} Link
      </Text>
      <Text style={{ marginLeft: 100, marginTop: 50, color: 'black' }}>
        -------------------OR----------------------
      </Text>
      <Text
        style={{
          marginLeft: 135,
          marginTop: 50,
          fontWeight: 'bold',
          color: 'black',
          fontSize: 20,
        }}
      >
        Contact Us At :{'\n'}
        {'\n'} 9657712712
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    //marginTop: 4,
  },
  container2: {
    marginVertical: 40,
    marginHorizontal: 130,

    fontSize: 70,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  container3: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#560CCE',
  },
})

export default Help
