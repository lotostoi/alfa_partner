import { Select } from "@alfalab/core-components/select";

export default function ({ paymentPeriods, paymentPeriod, className }) {
    return (
        <div className={className}>
            <Select
                options={paymentPeriods}
                label="Период оплаты"
                placeholder="Период оплаты"
                block
                selected={
                    paymentPeriods.find(({ key }) => key === paymentPeriod)?.key
                }
                onChange={(payload) =>
                    setOnboardingUserType(payload.selected.key)
                }
            />
        </div>
    );
}
