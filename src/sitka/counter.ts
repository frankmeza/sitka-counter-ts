import { SitkaModule } from "olio-sitka";
import { put, select } from "redux-saga/effects";
import { AppModules, AppState, CounterState } from "./index";

export default class CounterModule extends SitkaModule<
    CounterState,
    AppModules
> {
    public moduleName: string = "counter";
    public defaultState = 0;

    public *handleIncrement (): {} {
        const counter: CounterState = yield select(this.getCounter);
        yield put(this.setState(counter + 1));
    }

    public *handleDecrement (): {} {
        const counter: CounterState = yield select(this.getCounter);
        yield put(this.setState(counter - 1));
    }

    private getCounter (state: AppState): CounterState {
        return state.counter;
    }
}
