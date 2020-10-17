import * as React from "react";
import { TipOption } from "src/constants";
import { TipState } from "src/modules/tip";
import "../styles/tip.css";

type TipFieldProps = {
    options: TipOption;
    handleSetTip: (tipObject: TipState) => {};
};

type OnSelectOptionEvent = React.ChangeEvent<HTMLSelectElement>;

const TipField = (props: TipFieldProps) => {
    const { handleSetTip, options: { displays, type, values } } = props;

    const setTip = (event: OnSelectOptionEvent) => {
        const { target } = event;
        handleSetTip({ amount: Number(target.value), tipType: type });
    };

    return (
        <div className="tip-input-field">
            <select onChange={setTip}>
                {values.map((value, index) => {
                    return (
                        <option key={`${index}-${value}`} value={value}>
                            {displays[index]}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default TipField;
