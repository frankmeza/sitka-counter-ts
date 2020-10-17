import * as React from "react";
import "../styles/donation.css";

type DonationFieldProps = {
    readonly donationAmount: number;
    readonly handleSetDonation: (donation: number) => void;
};

const DonationField = (props: DonationFieldProps) => {
    const { donationAmount = 0, handleSetDonation } = props;

    const setDonation = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        handleSetDonation(Number(target.value));
    };

    return (
        <div className="donation-input-field">
            <input
                id="donationAmount"
                type="numeric"
                placeholder="enter donation amount"
                value={donationAmount}
                onChange={setDonation}
            />
        </div>
    );
};

export default DonationField;
