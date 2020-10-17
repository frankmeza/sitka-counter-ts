import { Sitka } from "olio-sitka";
import { Store } from "redux";

import { CounterModule, CounterState } from "./counter";
import { DonationModule, DonationState } from "./donation";
import { TipModule, TipState } from "./tip";

export interface AppModules {
    readonly counter: CounterModule;
    readonly donation: DonationModule;
    readonly tip: TipModule;
}

export interface AppState {
    readonly counter: CounterState;
    readonly donation: DonationState;
    readonly tip: TipState;
    readonly __sitka__: Sitka<AppModules>;
}

const sitka = new Sitka<AppModules>({ log: true });
sitka.register([new CounterModule(), new DonationModule(), new TipModule()]);

export const store = <Store>sitka.createStore();
