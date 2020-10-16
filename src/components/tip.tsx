import * as React from "react";
import { TipOption } from "src/constants";
import "../tip.css";
// import { TipState } from "src/modules/tip";

type TipFieldProps = {
    options: TipOption;
};

const TipField = (props: TipFieldProps) => {
    const { options: { displays, values } } = props;

    return (
        <div className="tip-input-field">
            <select>
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
