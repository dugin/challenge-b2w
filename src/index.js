import React from 'react';
import {render} from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {injectGlobal} from 'styled-components'
import globalStyle from "./styles/global";
import {BrowserRouter} from "react-router-dom";
import configureStore from "./configureStore";
import {Provider} from 'react-redux';


injectGlobal`${globalStyle}`;


render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(
            <App/>,
            document.getElementById('root')
        );
    })
}

registerServiceWorker();
