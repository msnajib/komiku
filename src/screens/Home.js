import React, { Component } from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [
        { id: 1, name: 'Lucinta Luna' },
        { id: 2, name: 'Lucinta Luci' },
        { id: 3, name: 'Kuwe Luna' },
        { id: 4, name: 'Lucinta Kamu' },
        { id: 5, name: 'Kamu Cinta Luna' },
        { id: 6, name: 'Sakarepmu Luna' },
      ]
    }
  }


  render() {

    return (
      <SafeAreaView>

        {this.state.data.map(item =>
          <Text key={item.id}> {item.name} </Text>
        )}

        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text> {item.name} </Text>}
          keyExtractor={item => item.id} />

      </SafeAreaView>
    )
  }
}