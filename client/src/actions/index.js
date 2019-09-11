import {FETCH_DATA,  ADD_PRODUCT} from './ActionTypes'

export function addProduct(product) {
  return {
    type:ADD_PRODUCT,
    product
  } 
}

export function fetchData(products) {
  return {
    type: FETCH_DATA,
    products
  }
}