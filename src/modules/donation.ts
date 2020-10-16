import { SitkaModule } from "olio-sitka";
import { put } from "redux-saga/effects";
import { AppModules } from "./index";

export type DonationState = number;

export class DonationModule extends SitkaModule<DonationState, AppModules> {
    public moduleName: string = "donation";
    public defaultState = 0;

    public *handleSubmit (value: number): {} {
        alert(`you choose : ${value}`);
    }

    public *handleSetDonation (donation: number): {} {
        yield put(this.setState(donation));
    }

    // private getDonation (state: AppState): DonationState {
    //     return state.donation;
    // }
}
