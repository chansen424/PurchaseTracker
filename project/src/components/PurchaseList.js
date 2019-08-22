import React from 'react'
import PropTypes from 'prop-types'
import Purchase from './Purchase'

const PurchaseList = ({ purchases, removePurchase }) =>
  (
    <div role="list" style={{color: '#fff'}}>
      {purchases.map(purchase => (
        <Purchase key={purchase.id} {...purchase} onClick={() => removePurchase(purchase.id)} />
      ))}
    </div>
  )

PurchaseList.propTypes = {
  purchases: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  removePurchase: PropTypes.func.isRequired
}

export default PurchaseList