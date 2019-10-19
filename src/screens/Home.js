import React, { Component } from 'react'
import { SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as actionTodos from './../redux/actions/actionTodos'
import * as actionUsers from './../redux/actions/actionUsers'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'Muhammad Rio'
    }
  }

  componentDidMount() {
    this.props.handleGetTodos()
    this.props.getUser()
  }

  handleAdd = () => {
    this.props.handleAddTodos(
      {
        id: 2,
        name: this.state.name
      }
    )
  }

  handleUpdate = (item) => () => {
    this.props.handleUpdateTodos({
      id: item.id,
      name: 'Rio Purba'
    })
  }

  handleDelete = (item) => {
    this.props.handleDeleteTodos(item)
  }


  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.props.todosLocal.todos}
          renderItem={({ item }) =>

            <TouchableOpacity
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderColor: '#d1d8e0',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
              onPress={this.handleUpdate(item)}>

              <Text> {item.name} </Text>
              <Text onPress={() => this.handleDelete(item)}>DELETE</Text>
            </TouchableOpacity>}
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
    handleAddTodos: (params) => dispatch(actionTodos.handleAddTodos(params)),
    handleUpdateTodos: (params) => dispatch(actionTodos.handleUpdateTodos(params)),
    handleDeleteTodos: (params) => dispatch(actionTodos.handleDeleteTodos(params)),

    getUser: () => dispatch(actionUsers.handleGetUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
