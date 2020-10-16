import * as React from "react";
import "../donation.css";

type DonationFieldProps = {
    readonly donationAmount: number;
    readonly setDonation: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DonationField = (props: DonationFieldProps) => {
    const { donationAmount, setDonation } = props;

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
