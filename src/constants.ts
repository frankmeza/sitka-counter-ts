type TipOptionType = "percentage" | "fixed";

export type TipOption = {
    displays: string[];
    threshold: number;
    type: TipOptionType;
    values: (number | undefined)[];
};

export const fixedUnder20: TipOption = {
    displays: ["$1", "$2", "custom"],
    threshold: 20,
    type: "fixed",
    values: [1, 2, undefined],
};

export const fixedAbove1000: TipOption = {
    displays: ["$25", "$50", "$100", "custom"],
    threshold: 1000,
    type: "fixed",
    values: [25, 50, 100, undefined],
};

const percentageValues = [10, 15, 20, undefined];

export const generatePercentageTipOptions = (
    donationAmount: number,
): TipOption => {
    if (donationAmount < fixedUnder20.threshold) {
        return fixedUnder20;
    }

    if (donationAmount < fixedAbove1000.threshold) {
        return fixedAbove1000;
    }

    const generatePercentageDisplay = (percentage: number) => {
        if (percentage === undefined) {
            return "Other";
        }

        const percentageAsDecimal = percentage / 100;

        const percentageOfDonation = `(${Math.ceil(
            percentageAsDecimal * donationAmount,
        )})`;

        return `${percentage}% ${percentageOfDonation}`;
    };

    return {
        displays: [...percentageValues.map(generatePercentageDisplay)],
        threshold: 0,
        type: "percentage",
        values: percentageValues,
    };
};
