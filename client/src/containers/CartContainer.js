import {connect} from 'react-redux'
import Cart from '../components/Cart'

const mapStateToProps=(state)=>{
  return {
    cart: state.cart
  }
}

const CartContainer= connect(mapStateToProps)(Cart)
export default CartContainer