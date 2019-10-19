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