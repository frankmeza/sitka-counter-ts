import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"

import { Provider } from "react-redux"
import { createCoreAppStore } from "./sitka"
import { Store } from "redux"

const store: Store = createCoreAppStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

registerServiceWorker()
