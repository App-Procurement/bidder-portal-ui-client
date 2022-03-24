const initialState = {};

export const vendorPortal = (state = initialState, action) => {
  return {
    ...state,
    ...action.data,
  };
};
