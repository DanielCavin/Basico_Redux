import { createStore } from 'redux'

import rootReducer from '../store/modules/rootReducer'


const store = createStore(rootReducer);

export default store; 