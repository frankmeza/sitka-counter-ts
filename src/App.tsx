import * as React from "react";
import "./App.css";
import logo from "./logo.svg";

import { connect } from "react-redux";
import { AppState, AppModules } from "./modules";
import { CounterModule } from "./modules/counter";
import { DonationModule } from "./modules/donation";

import DonationField from "./components/donation";
import TipField from "./components/tip";

import { generatePercentageTipOptions } from "./constants";

type AppProps = {
    readonly sitkaState: AppState;
    readonly counterModule: CounterModule;
    readonly donationModule: DonationModule;
};

const DONATION_AMOUNT = "DONATION AMOUNT: ";
const TIP_AMOUNT = "TIP AMOUNT: ";
const FORM_HEADER = "Donation and Tip Form, and Summary";
const NO_DONATION = "NO DONATION";
const SUBMIT = "submit donation";

const App = (props: AppProps) => {
    const {
        // app state
        sitkaState: { donation, tip },

        // sitka modules
        donationModule: { handleSetDonation },
    } = props;

    const subHeaderTextDonation =
        donation ? `${DONATION_AMOUNT} ${donation}` :
        `${NO_DONATION}`;

    const subHeaderTextTip =
        donation ? `${TIP_AMOUNT} ${tip.amount}` :
        "";

    const subHeaderTextTotal = donation + tip.amount;
    const tipOptions = generatePercentageTipOptions(donation);

    const setDonation = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        handleSetDonation(Number(target.value));
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{FORM_HEADER}</h1>
                <h3>{subHeaderTextDonation}</h3>
                <h3>{subHeaderTextTip}</h3>
                <h3>{subHeaderTextTotal}</h3>
            </header>

            <DonationField
                donationAmount={donation}
                setDonation={setDonation}
            />

            <TipField options={tipOptions} />

            <button type="submit" name="submitButton">
                {SUBMIT}
            </button>
        </div>
    );
};

export default connect((state: AppState) => {
    const modules: AppModules = state.__sitka__.getModules();

    return {
        sitkaState: state,
        counterModule: modules.counter,
        donationModule: modules.donation,
    };
})(App);
