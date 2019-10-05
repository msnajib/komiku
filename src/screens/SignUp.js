import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native'
import { Item, Input, Text } from 'native-base'

import Button from './../components/Button'

export default class SignUp extends Component {

  handleSignIn() {
    this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>

          <View style={[styles.textInfo, styles.textInfoTop]}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subTitle}>Masukan data diri Anda cuy...</Text>
          </View>

          <View style={styles.form}>
            <Item rounded style={styles.formItem}>
              <Input
                keyboardType='default'
                placeholder='Input your full name' />
            </Item>
            <Item rounded style={styles.formItem}>
              <Input
                keyboardType='email-address'
                placeholder='Input your email' />
            </Item>
            <Item rounded style={styles.formItem}>
              <Input
                secureTextEntry={true}
                keyboardType='default'
                placeholder='Input your password' />
            </Item>
            <Button
              title={"Sign Up Now"}
              onHandleButton={() => alert('Berhasil Sign Up')} />
          </View>

          <View style={styles.textInfo}>
            <Text> Have an account
              <Text
                onPress={() => this.handleSignIn()}
                style={{ color: 'blue' }}> Sign In </Text>
            </Text>
          </View>

        </View>
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: Dimensions.get('window').width,
    paddingHorizontal: 20
  },
  textInfo: {
    alignItems: 'center',
    padding: 20
  },
  textInfoTop: {
    marginTop: 40,
    marginBottom: 60
  },
  title: {
    fontSize: 50
  },
  subTitle: {
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center'
  },
  formItem: {
    marginBottom: 20
  }
})