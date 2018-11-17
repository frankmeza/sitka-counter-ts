import { SitkaModule } from "olio-sitka"
import { put, select } from "redux-saga/effects"
import { AppModules, AppState, CounterState } from "./index"

export default class CounterModule extends SitkaModule<CounterState, AppModules> {
    public moduleName: string = "counter"

    public defaultState: CounterState = {
        counter: 0,
    }

    public * handleIncrement(): {} {
        const currentCounter: CounterState = yield select(this.getCounter)

        const updatedCounter: CounterState = {
            counter: currentCounter.counter + 1,
        }

        yield put(this.setState(updatedCounter))
    }

    public * handleDecrement(): {} {
        const currentCounter: CounterState = yield select(this.getCounter)

        const updatedCounter: CounterState = {
            counter: currentCounter.counter - 1,
        }

        yield put(this.setState(updatedCounter))
    }

    private getCounter(state: AppState): CounterState {
        return state.counter
    }
}