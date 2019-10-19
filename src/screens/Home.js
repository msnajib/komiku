import React, { Component } from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import * as actionTodos from './../redux/actions/actionTodos'

class Home extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.handleGetTodos()
  }


  render() {
    return (
      <SafeAreaView>

        <FlatList
          data={this.props.todosLocal.todos}
          renderItem={({ item }) => <Text> {item.name} </Text>}
          keyExtractor={item => item.id}
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderColor: '#d1d8e0'
          }} />

      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return {
    todosLocal: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetTodos: () => dispatch(actionTodos.handleGetTodos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
