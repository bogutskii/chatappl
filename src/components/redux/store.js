import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storeFn from './reducers';
import thunk from 'redux-thunk';

const store = createStore(storeFn, composeWithDevTools(applyMiddleware(thunk)));
export default store;
