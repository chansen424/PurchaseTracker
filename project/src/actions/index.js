import C from '../constants'

let nextPurchaseId = 0

export const addPurchase = (description, cost) =>
  ({
    type: C.ADD_PURCHASE,
    id: nextPurchaseId++,
    description: description,
    cost: parseFloat(cost)
  })

export const removePurchase = id =>
  ({
    type: C.REMOVE_PURCHASE,
    id: id
  })

export const setPrice = (id, cost) =>
  ({
    type: C.SET_PRICE,
    id: id,
    cost: cost
  })