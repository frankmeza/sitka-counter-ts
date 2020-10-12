import * as React from "react";
import "./App.css";
import logo from "./logo.svg";

import { connect } from "react-redux";
import { AppState, AppModules } from "./sitka";
import CounterModule from "./sitka/counter";

interface AppProps {
    readonly counterModule: CounterModule;
    readonly sitkaState: AppState;
}

const App = (props: AppProps) => {
    const { counterModule, sitkaState } = props;

    const { handleDecrement, handleIncrement } = counterModule;
    const { counter } = sitkaState.counter;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">
                    Welcome to Sitka Counter {counter}
                </h1>
            </header>

            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleIncrement}>INCREMENT</button>
        </div>
    );
};

export default connect((state: AppState) => {
    const modules: AppModules = state.__sitka__.getModules();

    return {
        counterModule: modules.counter,
        sitkaState: state,
    };
})(App);
