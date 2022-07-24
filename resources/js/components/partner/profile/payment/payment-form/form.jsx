import { useEffect } from "react";
import { useState } from "react";
import { Input } from "@alfalab/core-components/input";
import { Select } from "@alfalab/core-components/select";

import Info from "./info";
import BtnSave from "./btn-save";

import DateField from "./fields/date-field";
import OnboardingUserType from "./fields/onboarding-user-type";
import PaymentPeriod from "./fields/payment-period";
import Taxation from "./fields/taxation";
import Name from "./fields/name";

import style from "./style.module.scss";

function Fields({ user, dataForSelects }) {
    const { onboardingUserTypes, paymentPeriods, taxations } = dataForSelects;
    const { onboardingUserType, allDocs, paymentPeriod, taxation, fullName } =
        user;

    const [currentClassName, setCurrentClassName] = useState(style.columns_5);

    let [_onboardingUserType, setOnboardingUserType] =
        useState(onboardingUserType);

    useEffect(() => {
        _onboardingUserType === "fl" &&
            !allDocs &&
            setCurrentClassName(style.columns_2);

        _onboardingUserType === "fl" &&
            allDocs &&
            setCurrentClassName(style.columns_3);

        _onboardingUserType !== "fl" &&
            !allDocs &&
            setCurrentClassName(style.columns_4);

        _onboardingUserType !== "fl" &&
            allDocs &&
            setCurrentClassName(style.columns_5);
    }, [_onboardingUserType, allDocs]);

    return (
        <form className={style.wrapper_form}>
            <div className={style.wrapper_fields}>
                <DateField
                    allDocs={allDocs}
                    className={currentClassName}
                    value={user?.contractDate}
                />

                <OnboardingUserType
                    onboardingUserType={_onboardingUserType}
                    onboardingUserTypes={onboardingUserTypes}
                    className={currentClassName}
                    setOnboardingUserType={setOnboardingUserType}
                />

                <PaymentPeriod
                    paymentPeriod={paymentPeriod}
                    paymentPeriods={paymentPeriods}
                    className={currentClassName}
                />

                <Taxation
                    taxation={taxation}
                    taxations={taxations}
                    className={currentClassName}
                    onboardingUserType={_onboardingUserType}
                />

                <Name
                    onboardingUserType={_onboardingUserType}
                    fullName={fullName}
                    className={currentClassName}
                />
            </div>

            <Info
                onboardingUserType={_onboardingUserType}
                allDocs={allDocs}
            />

            <BtnSave className={style.btn_save}/>
        </form>
    );
}

export default Fields;
