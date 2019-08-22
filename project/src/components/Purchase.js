import React from 'react'
import PropTypes from 'prop-types'

const Purchase = ({ onClick, description, cost }) =>
  (
    <div role="listitem" className="item"
      onClick={ onClick }
    >
      { description } - ${ cost.toFixed(2) }
    </div>
  )

Purchase.propTypes = {
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired
}

export default Purchase