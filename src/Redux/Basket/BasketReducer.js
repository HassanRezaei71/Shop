import types from "./BasketTypes";

const initialState = {
  basketList: [
  ],
};

const basketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TO_BASKET:
      return {
        ...state,
        basketList: [...state.basketList, { ...payload, count: 1 }],
      };
    case types.INCREASE_COUNT:
      return {
        ...state,
        basketList: state.basketList.map((item) =>
          item.id === payload ? { ...item, count: item.count + 1 } : item
        ),
      };
    case types.DECREASE_COUNT:
      return {
        ...state,
        basketList: state.basketList.map((item) =>
          item.id === payload
            ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
            : item
        ),
      };
    default:
      return state;
  }
};
export default basketReducer;
