import {
    TipOption,
    fixedUnder20,
    fixedAbove1000,
    TipOptionType,
} from "./constants";

const percentageValues = [10, 15, 20, undefined];

const generatePercentageDisplay = (
    donation: number,
    percentage: number,
): string => {
    if (percentage === undefined) {
        return "Other";
    }

    const percentageAsDecimal = percentage / 100;
    const percentageOfDonation = `(${Math.ceil(
        percentageAsDecimal * donation,
    )})`;

    return `${percentage}% ${percentageOfDonation}`;
};

export const generatePercentageTipOptions = (
    donationAmount: number,
): TipOption => {
    if (donationAmount < fixedUnder20.threshold) {
        return fixedUnder20;
    }

    if (donationAmount < fixedAbove1000.threshold) {
        return fixedAbove1000;
    }

    const displays = [
        ...percentageValues.map(value =>
            generatePercentageDisplay(donationAmount, value!),
        ),
    ];

    return {
        displays,
        threshold: 0,
        type: TipOptionType.PERCENTAGE,
        values: percentageValues,
    };
};
