import {connect} from 'react-redux'
import TopBar from '../components/TopBar'

const mapStateToProps= (state, ownProps)=>{
  return {
    cart: state.cart
  }
}

const TopBarContainer= connect(mapStateToProps)(TopBar)
export default TopBarContainer