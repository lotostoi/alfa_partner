import { Select } from "@alfalab/core-components/select";

export default function ({
    onboardingUserTypes,
    onboardingUserType,
    className,
    setOnboardingUserType,
}) {
    return (
        <div className={className}>
            <Select
                options={onboardingUserTypes}
                label="Форма сотрудничества"
                placeholder="Форма сотрудничества"
                block
                selected={
                    onboardingUserTypes.find(
                        ({ key }) => key === onboardingUserType
                    )?.key
                }
                onChange={(payload) =>
                    setOnboardingUserType(payload.selected.key)
                }
            />
        </div>
    );
}
