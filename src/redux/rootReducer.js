import {combineReducers} from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/app";
import authReducer from "./slices/auth";
import conversationReducer from "./slices/conversation";

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
  auth: authReducer,
  conversation: conversationReducer,
});

export { rootPeristConfig, rootReduce };
