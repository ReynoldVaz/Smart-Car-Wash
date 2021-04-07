import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './HomeScreen'
import React from 'react'

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Privacy Policy" component={Privacy} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="Sign Out" component={SignOut} />
    </Drawer.Navigator>
  )
}

export default function HomeScreenTrial() {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  )
}
