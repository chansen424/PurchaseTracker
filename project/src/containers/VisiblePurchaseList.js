import { connect } from 'react-redux'
import { removePurchase } from '../actions'
import PurchaseList from '../components/PurchaseList'

const mapStateToProps = state =>
  ({
    purchases: state.purchases
  })

const mapDispatchToProps = dispatch =>
  ({
    removePurchase: id => dispatch(removePurchase(id))
  })

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseList)