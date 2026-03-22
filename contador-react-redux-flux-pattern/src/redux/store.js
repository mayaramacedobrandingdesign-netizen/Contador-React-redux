// A store guarda o estado global da aplicação

import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

export default store;