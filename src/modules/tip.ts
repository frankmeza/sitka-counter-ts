import { SitkaModule } from "olio-sitka";
import { put } from "redux-saga/effects";
import { AppModules } from "./index";

type TipType = "custom" | "percentage" | "fixed";

export type TipState = {
    readonly tipType: TipType;
    readonly amount: number;
};

export class TipModule extends SitkaModule<TipState, AppModules> {
    public moduleName: string = "tip";

    public defaultState: TipState = {
        amount: 0,
        tipType: "fixed",
    };

    public *handleSubmit (value: number): {} {
        alert(`you choose : ${value}`);
    }

    public *handleSetTip (tipObject: TipState): {} {
        yield put(this.setState(tipObject));
    }
}
