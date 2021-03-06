import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { store } from "./modules/index";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"),
);

registerServiceWorker();
