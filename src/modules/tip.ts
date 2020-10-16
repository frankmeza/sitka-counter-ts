import { SitkaModule } from "olio-sitka";
import { put, select } from "redux-saga/effects";
import { AppModules, AppState } from "./index";

type TipType = "custom" | "percentage" | "fixed";

export type TipState = {
    readonly type: TipType;
    readonly amount: number;
};

export class TipModule extends SitkaModule<TipState, AppModules> {
    public moduleName: string = "tip";

    public defaultState: TipState = {
        type: "percentage",
        amount: 0,
    };

    public *handleSubmit (value: number): {} {
        alert(`you choose : ${value}`);
    }

    public *handleSetTipAmount (amount: number): {} {
        const currentTip: TipState = yield select(this.getTip);
        yield put(this.setState({ ...currentTip, amount }));
    }

    private getTip (state: AppState): TipState {
        return state.tip;
    }
}
