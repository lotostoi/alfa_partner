import { Select } from "@alfalab/core-components/select";
import { useEffect } from "react";

export default function ({
    taxations,
    taxation,
    className,
    onboardingUserType,
}) {

    return onboardingUserType != "fl" ? (
        <div className={className}>
            <Select
                options={taxations}
                label="Тип налогооблажения"
                placeholder="Тип налогооблажения"
                block
                selected={
                    taxations.find(({ key }) => {
                        return key == taxation;
                    })?.key
                }
                onChange={(payload) =>
                    setOnboardingUserType(payload.selected.key)
                }
            />
        </div>
    ) : null;
}
