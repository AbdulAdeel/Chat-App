import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app";

//slice

const rootPeristConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //whitelist: [],
  //blacklist: [],
};

const rootReduce = combineReducers({
  app: appReducer,
});

export { rootPeristConfig, rootReduce };
