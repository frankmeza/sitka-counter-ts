import { Sitka } from "olio-sitka"
import CounterModule from "./counter"
import { Store } from 'redux'

export interface CounterState {
    readonly counter: number
}

export interface AppModules {
    readonly counter: CounterModule
}

export interface AppState {
    readonly counter: CounterState,
    readonly __sitka__: Sitka<AppModules>
}

const sitka = new Sitka<AppModules>()
sitka.register([
    new CounterModule(),
])

export const store = <Store> sitka.createStore()