import * as React from "react";
import "./styles/App.css";
import logo from "./logo.svg";

import { connect } from "react-redux";
import { AppState, AppModules } from "./modules";
import { CounterModule } from "./modules/counter";
import { DonationModule } from "./modules/donation";
import { TipModule } from "./modules/tip";

import DonationField from "./components/donation";
import TipField from "./components/tip";

import { generatePercentageTipOptions } from "./utils";

type AppProps = {
    readonly sitkaState: AppState;
    readonly counterModule: CounterModule;
    readonly donationModule: DonationModule;
    readonly tipModule: TipModule;
};

const DONATION_AMOUNT = "DONATION AMOUNT: ";
const FORM_HEADER = "Donation and Tip Form, and Summary";
const NO_DONATION = "NO DONATION";
const SUBMIT = "submit donation";
const TIP_AMOUNT = "TIP AMOUNT: ";

const App = (props: AppProps) => {
    const {
        // app state
        sitkaState: { donation, tip },

        // sitka modules
        donationModule: { handleSetDonation },
        tipModule: { handleSetTip },
    } = props;

    const donationText =
        donation ? `${DONATION_AMOUNT} ${donation}` :
        `${NO_DONATION}`;

    const tipText =
        donation ? `${TIP_AMOUNT} ${tip.amount}` :
        "";

    const totalText = donation + tip.amount;
    const tipOptions = generatePercentageTipOptions(donation);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{FORM_HEADER}</h1>
                <h3>{donationText}</h3>
                <h3>{tipText}</h3>
                <h3>{totalText}</h3>
            </header>

            <DonationField
                donationAmount={donation}
                handleSetDonation={handleSetDonation}
            />

            <TipField options={tipOptions} handleSetTip={handleSetTip} />

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
        tipModule: modules.tip,
    };
})(App);
