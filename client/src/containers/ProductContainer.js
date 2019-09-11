import {connect} from 'react-redux'
import Product from '../components/Product'
import {addProduct} from '../actions'

const mapDispatchToProps=(dispatch)=>{
  return {
    addToCart: (product)=>dispatch(addProduct(product))
  }
}

const ProductContainer= connect(null, mapDispatchToProps)(Product)
export default ProductContainer