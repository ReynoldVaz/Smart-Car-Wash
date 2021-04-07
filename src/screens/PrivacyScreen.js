import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AreaScreen from './AreaScreen'
import CarTypeScreen from './CarTypeScreen'
import HomeScreen from './HomeScreen'

import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
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

const Privacy = ({ navigation }) => {
  return (
    <ScrollView>
      <Headline style={styles.container3}>Smart Car Wash</Headline>
      <Text style={{ marginLeft: 10 }}>
        {'\n'}
        {'\n'}The Internet is an amazing tool. It has the power to change the
        way we live, and we’re starting to see that potential today. With only a
        few mouse-clicks, you can follow the news, look up facts, buy goods and
        services, and communicate with others from around the world. It’s
        important for SMART CAR WASHING application to help our customers retain
        their privacy when they take advantage of all the Internet has to offer.
        We believe your business is no one else’s. Your privacy is important to
        you and to us. So we’ll protect the information you share with us. To
        protect your privacy, our application follows different principles in
        accordance with worldwide practices for customer privacy and data
        protection. We won’t sell or give away your name, mail address, phone
        number, email address or any other information to anyone.
        {'\n'}
        {'\n'}
        Security Procedures:{'\n'}
        All information gathered on application is securely stored within
        controlled database. The database is stored on servers secured behind a
        firewall; access to such servers being password-protected and strictly
        limited based on need-to-know basis. However, we understand that as
        effective as our security measures are, no security system is
        impenetrable. Thus, we cannot guarantee the security of our database,
        nor can we guarantee that information you supply will not be intercepted
        while being transmitted to us over the Internet. By using the app, you
        understand and agree that your information may be used in or transferred
        to countries other than India.
        {'\n'}
        {'\n'}
        NOTICE{'\n'}
        We will ask you when we need information that personally identifies you
        (personal information) or allows us to contact you. Generally, this
        information is requested when you register on app . We use your Personal
        Information for primary purposes:
        {'\n'}
        To make the app easier for you to use by not having to enter information
        more than once. To help you quickly services or information. To help us
        create content most relevant to you. To alert you to special offers,
        updated information and other new services from in our application.
        {'\n'}
        {'\n'}
        ACCESS{'\n'}
        We will provide you with the means to ensure that your personal
        information is correct and current. You may review and update this
        information at any time on the application. There, you can: View and
        edit personal information you have already given us. Register. Once you
        register, you won’t need to do it again.
        {'\n'}
        {'\n'}
        SECURITY{'\n'}
        Our Application 'SMART CAR WASHING' has taken strong measures to protect
        the security of your personal information and to ensure that your
        choices for its intended use are honored. We take strong precautions to
        protect your data from loss, misuse, unauthorized access or disclosure,
        alteration, or destruction.
        {'\n'}
        SMART CAR WASHING strictly protects the security of your personal
        information and honors your choices for its intended use. We carefully
        protect your data from loss, misuse, unauthorized access or disclosure,
        alteration, or destruction.
        {'\n'}
        Your personal information is never shared outside the company without
        your permission, except under conditions explained below in disclore
        section. Inside the company, data is stored in password-controlled
        servers with limited access. Your information may be stored and
        processed in INDIA or any other country where SMART CAR WASHING , its
        subsidiaries, affiliates or agents are located.
        {'\n'}
        You also have a significant role in protecting your information. No one
        can see or edit your personal information without knowing your user name
        and password, so do not share these with others.
        {'\n'}
        {'\n'}
        ENFORCEMENT{'\n'}
        If for some reason you believe our application 'SMART CAR WASHING' has
        not adhered to these principles, please notify us by email at
        smartcarwashing@gmail.com, and we will do our best to determine and
        correct the problem promptly. Be certain the words Privacy Policy are in
        the Subject line.
        {'\n'}
        CUSTOMER PROFILES{'\n'}
        As mentioned above, every registered customer has a unique personal
        profile. Each profile is assigned a unique personal identification
        number, which helps us ensure that only you can access your profile.
        {'\n'}
        {'\n'}
        DISCLOSURE{'\n'}
        We may disclose your personal information to any of our employees,
        officers, agents, suppliers or sub-contractors as reasonably necessary
        for the purposes set out in this privacy policy. In addition, we may
        disclose your personal information: To the extent that we are required
        to do so by law; In connection with any ongoing or prospective legal
        proceedings; In order to establish, exercise or defend our legal rights
        (including providing information to others for the purposes of fraud
        prevention and reducing credit risk; To the purchaser (or prospective
        purchaser) of any business or asset that we are (or are contemplating)
        selling; To any person who we reasonably believe may apply to a court or
        other competent authority for disclosure of that personal information
        where, in our reasonable opinion, such court or authority would be
        reasonably likely to order disclosure of that personal information.
        Except as provided in this privacy policy, we will not provide your
        information to third parties. In the event of any of the above, we will
        seek prior consent from you before disclosing you information.
        {'\n'}
        {'\n'}
        UPDATING INFORMATION:{'\n'}
        You will promptly notify by us if there are any changes, updates or
        modifications to your information. Further, you may also review, update
        or modify your information and user preferences by logging into your
        Profile page on the application.
        {'\n'}
        {'\n'}
        CONTACT US{'\n'}
        S-2 Naik residency Airport Rd, Vaddem-Vasco,Goa, INDIA Call us Now!
        777-420-4617 S-1, Robinson, church Rd,Baina-Vasco, Goa, INDIA Call us
        NOW! 8390698046
        {'\n'}
        {'\n'}
        ABOUT US{'\n'}
        {'\n'}
        Professional Car Wash In GOA Website: https//smartcarwashing.com
        {'\n'}
        {'\n'}
        SMART CAR WASHING has been operating in GOA since 2021.
        {'\n'}
        {'\n'}
        Privacy Policy{'\n'}
        PAYMENTS ACCEPTED{'\n'}
        In-out Payment Mode{'\n'}
        Designed by Engineers | Powered by SMART CAR WASHING {'\n'}
        Facebook{'\n'}
        Twitter{'\n'}
        Instagram{'\n'}
      </Text>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container3: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#560CCE',
  },
})

export default Privacy
