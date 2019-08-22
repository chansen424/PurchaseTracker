import C from '../constants'

const purchases = (state=[], action) => {
  switch(action.type) {
    
    case C.ADD_PURCHASE :
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
          cost: action.cost
        }
      ]

    case C.REMOVE_PURCHASE :
      return state.filter(purchase => purchase.id !== action.id )

    case C.SET_PRICE :
      return state.map(purchase =>
        purchase.id === action.id ? { ...purchase, cost: action.cost } : purchase
      )

    default:
      return state
  }
}

export default purchases