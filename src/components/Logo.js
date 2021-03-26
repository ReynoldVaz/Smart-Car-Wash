import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => (
  <Image source={require('../assets/scw-logo1.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    marginBottom: 20,
    resizeMode: 'stretch',
  },
})

export default Logo
