import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native'
import { Item, Input, Text } from 'native-base'
import { StackActions, NavigationActions } from 'react-navigation'

import Button from './../components/Button'

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }


  handleSignUp() {
    this.props.navigation.navigate('SignUp')
  }

  handleSignIn() {
    // if (this.state.email === '') {
    //   alert('Emailmu kosong cok..')
    // } else if (this.state.password === '') {
    //   alert('Passwordmu kosong cok..')
    // } else {
    //   const resetAction = StackActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({ routeName: 'Home' })],
    //   });
    //   this.props.navigation.dispatch(resetAction);
    // }
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>

          <View style={[styles.textInfo, styles.textInfoTop]}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subTitle}>Sign In with your account</Text>
          </View>

          <View style={styles.form}>
            <Item rounded style={styles.formItem}>
              <Input
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Input your email' />
            </Item>
            <Item rounded style={styles.formItem}>
              <Input
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
                secureTextEntry={true}
                keyboardType='default'
                placeholder='Input your password' />
            </Item>
            <Button
              title={"Let's Get Started"}
              onHandleButton={() => this.handleSignIn()} />
          </View>

          <View style={styles.textInfo}>
            <Text> Don't have an account?
              <Text
                onPress={() => this.handleSignUp()}
                style={styles.txtLink}> Sign Up </Text>
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
    marginTop: 10
  },
  formItem: {
    marginBottom: 20
  },
  txtLink: {
    color: 'blue'
  }
})