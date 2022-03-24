import { vendorPortal } from "./vendorPortal.reducer";
import { combineReducers } from "redux";
let appReducers = combineReducers({
  vendorPortal,
});

const rootReducer = (state, action) => {
  return appReducers(state, action);
};
export default rootReducer;
