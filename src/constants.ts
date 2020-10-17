export enum TipOptionType {
    PERCENTAGE = "percentage",
    FIXED = "fixed",
}

export type TipOption = {
    displays: string[];
    threshold: number;
    type: TipOptionType;
    values: (number | undefined)[];
};

export const fixedUnder20: TipOption = {
    displays: ["$1", "$2", "custom"],
    threshold: 20,
    type: TipOptionType.FIXED,
    values: [1, 2, undefined],
};

export const fixedAbove1000: TipOption = {
    displays: ["$25", "$50", "$100", "custom"],
    threshold: 1000,
    type: TipOptionType.PERCENTAGE,
    values: [25, 50, 100, undefined],
};
