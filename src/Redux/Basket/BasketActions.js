import types from "./BasketTypes";

export const addToBasket = (basket) => {
  return {
    type: types.ADD_TO_BASKET,
    payload: basket,
  };
};

export const increaseCount = (id) => {
  return {
    type: types.INCREASE_COUNT,
    payload: id,
  };
};

export const decreaseCount = (id) => {
  return {
    type: types.DECREASE_COUNT,
    payload: id,
  };
};

export const deleteCount = (id) => {
  return {
    type: types.DECREASE_COUNT,
    payload: id,
  };
};
