import {createStore, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from "./rootReducer";


const configureStore = () => {

    let middlewares = [reduxThunk, promise()];

    let store = createStore(rootReducer, applyMiddleware(...middlewares));

    if (process.env.NODE_ENV !== "production") {
        middlewares.push(createLogger());

        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

        if (module.hot) {
            module.hot.accept('./rootReducer', () => {
                store.replaceReducer(rootReducer)
            })
        }
    }

    return store;
};

export default configureStore;
