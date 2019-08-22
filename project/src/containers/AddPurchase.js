import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addPurchase } from '../actions'
import '../style/AddPurchase.css'

const AddPurchase = ({ dispatch }) => {
  let description, cost

  return (
    <div className="form__container">
      <form
        onSubmit={e => {
          e.preventDefault()
          if(!description.value.trim() && !cost.value.trim()) {
            return
          }
          dispatch(addPurchase(description.value, cost.value))
          description.value = ''
          cost.value = ''
        }}>
          <div>
            <div className="ui left icon input">
              <input ref={node => (description = node)} placeholder="Description" />
              <i aria-hidden="true" className="pencil alternate icon"></i>
            </div>
            <div className="ui left icon input">
              <input ref={node => (cost = node)} placeholder="Cost" />
              <i aria-hidden="true" className="dollar icon"></i>
            </div>
            <br />
            <div id="submit-btn">
              <Button inverted color='yellow' type="submit">Add Purchase</Button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default connect()(AddPurchase)