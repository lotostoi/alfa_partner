import { Input } from "@alfalab/core-components/input";
import { useEffect } from "react";
import { useState } from "react";

export default function ({ onboardingUserType, fullName, className }) {
    const labelValue = (onboardingUserType) =>
        onboardingUserType != "fl" ? "Наименование юр.лица" : "ФИО";

    const [label, setLabel] = useState(labelValue(onboardingUserType));

    useEffect(() => {
        setLabel(labelValue(onboardingUserType));
    }, [onboardingUserType]);

    return onboardingUserType != "fl" ? (
        <div className={className}>
            <Input
                label={label}
                placeholder="Тип налогооблажения"
                block
                value={fullName}
            />
        </div>
    ) : null;
}
