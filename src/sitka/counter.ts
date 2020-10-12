import { SitkaModule } from "olio-sitka";
import { put, select } from "redux-saga/effects";
import { AppModules, AppState } from "./index";

export type CounterState = number;

export class CounterModule extends SitkaModule<
    CounterState,
    AppModules
> {
    public moduleName: string = "counter";
    public defaultState = 0;

    public *handleIncrement (/* event */): {} {
        const counter: CounterState = yield select(this.getCounter);
        yield put(this.setState(counter + 1));
    }

    public *handleDecrement (/* event */): {} {
        const counter: CounterState = yield select(this.getCounter);
        yield put(this.setState(counter - 1));
    }

    private getCounter (state: AppState): CounterState {
        return state.counter;
    }
}
