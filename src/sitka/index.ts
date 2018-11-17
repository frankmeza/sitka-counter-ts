import { createAppStore, Sitka, StoreOptions } from "olio-sitka"
import { call } from "redux-saga/effects"

import {
    Middleware,
    ReducersMapObject,
    Store,
} from "redux"

import CounterModule from "./counter"

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

const sitkaMeta = sitka.createSitkaMeta()

const defaultState: Partial<AppState> = {
    ...sitkaMeta.defaultState,
}

export const createCoreAppStore = (
    middleware?: Middleware[],
    reducersToCombine?: ReducersMapObject[],
    sagaRoot?: () => {},
): Store => {
    function* root(): IterableIterator<{}> {
        if (sagaRoot) {
            yield call(sagaRoot)
        }
        yield call(sitkaMeta.sagaRoot)
    }

    const storeOptions: StoreOptions = {
        initialState: defaultState,
        reducersToCombine: [...(reducersToCombine || []), { ...sitkaMeta.reducersToCombine }],
        middleware: [...(middleware || []), ...sitkaMeta.middleware],
        sagaRoot: root,
        log: true,
    }

    const store: Store = createAppStore(storeOptions)
    sitka.setDispatch(store.dispatch)

    return store
}