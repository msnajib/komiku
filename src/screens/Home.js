import React, { Component } from 'react'
import { SafeAreaView, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import * as actionTodos from './../redux/actions/actionTodos'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Muhammad Rio'
    }
  }

  componentDidMount() {
    this.props.handleGetTodos()
  }

  handleAdd = () => {
    this.props.handleAddTodos(
      {
        id: 2,
        name: this.state.name
      }
    )
  }


  render() {
    return (
      <SafeAreaView>

        <FlatList
          data={this.props.todosLocal.todos}
          renderItem={({ item }) =>
            <Text style={{
              padding: 20,
              borderBottomWidth: 1,
              borderColor: '#d1d8e0'
            }} > {item.name} </Text>}
          keyExtractor={item => item.id} />

        <Text onPress={this.handleAdd}>ADD TODO</Text>

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
    handleGetTodos: () => dispatch(actionTodos.handleGetTodos()),
    handleAddTodos: (params) => dispatch(actionTodos.handleAddTodos(params))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
