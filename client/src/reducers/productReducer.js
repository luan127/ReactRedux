import {ADD_PRODUCT} from '../actions/ActionTypes'

export default function productReducer(state=[], action) {
  switch(action.type){
    case ADD_PRODUCT:
      return [...state, action.product]
    default:
      return state
  }
}