import * as types from './../types'

export const handleGetTodos = () => ({
  type: types.GET_TODOS,
  payload: [
    {
      id: 1,
      name: 'Lucinta Luna'
    }
  ]
});

export const handleAddTodos = (params) => ({
  type: types.ADD_TODOS,
  payload: params
});