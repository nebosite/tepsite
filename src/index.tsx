import React from 'react';
import './_globalStyles.css';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { AppModel } from './models/AppModel';
import { Provider } from 'mobx-react';
import { Router } from "react-router-dom";
import AppRoot from './AppRoot';

const history = createBrowserHistory();
const theAppModel = new AppModel();

ReactDOM.render(
    // The provider gives down-level components access to the appModel
    // which holds any state we want to keep for forms, easter eggs, etc

    // The Router tag provides context for the menu system

    // The AppRoot is the component which frames the menu and pages
    <Provider appModel={theAppModel}> 
         <Router history={history}>
                 <AppRoot />
         </Router>
    </Provider>,
    document.getElementById("root")
);  
