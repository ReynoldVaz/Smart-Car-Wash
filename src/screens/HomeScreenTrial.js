import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AreaScreen from './AreaScreen'
import CarTypeScreen from './CarTypeScreen'
import HomeScreen from './HomeScreen'

import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { Snackbar, Headline } from 'react-native-paper'
//import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Avatar } from 'react-native-paper'

const Profile = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })

      return
    } else {
      onToggleSnackBar()
    }
  }
  const [visible, setVisible] = React.useState(false)

  const onToggleSnackBar = () => setVisible(!visible)

  const onDismissSnackBar = () => setVisible(false)

  return (
    <View style={styles.container1}>
      <BackButton goBack={navigation.goBack} />
      <Avatar.Text style={styles.container2} size={100} label="A" />
      <Header style={styles.container3}>Edit Profile</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        //onPress={onToggleSnackBar}
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Save Changes
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'OK',
          onPress: () => {
            // Do something
          },
        }}
      >
        Changes Saved.
      </Snackbar>
    </View>
  )
}

function Privacy() {
  return (
    <View>
      <Headline style={styles.container3}>Privacy Policy</Headline>
    </View>
  )
}
function Help() {
  return (
    <View>
      <Headline style={styles.container3}>Help</Headline>
    </View>
  )
}
function SignOut() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Are you sure you want to sign out?</Text>
      <Button onPress={() => navigation.navigate('LoginScreen')}>Yes</Button>
      <Button onPress={() => navigation.navigate('HomeScreenTrial')}>No</Button>
    </View>
  )
}

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

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 20,
    //marginTop: 4,
  },
  container2: {
    //flex: 1,
    //padding: 20,
    //marginTop: 4,
    //paddingHorizontal: 20,
    //paddingVertical: 5,
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

export default function HomeScreenTrial() {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  )
}
