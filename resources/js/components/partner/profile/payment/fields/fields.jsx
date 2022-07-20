import { useEffect } from "react";
import { useState } from "react";
import SeNotAllDocs from "./se-not-all-docs-fields";
import FlNotAllDocs from "./fl-not-all-docs-fields";

function Fields({ allDocs, onboardingUserType, email }) {
    let [_onboardingUserType, setOnboardingUserType] =
        useState(onboardingUserType);

    useEffect(() => {
        console.log(_onboardingUserType);
    }, [_onboardingUserType]);

    if (_onboardingUserType === "se" && allDocs === 0) {
        return (
            <SeNotAllDocs
                email={email}
                onboardingUserType={_onboardingUserType}
                setOnboardingUserType={setOnboardingUserType}
            />
        );
    }

    if (_onboardingUserType === "se" && allDocs === 1) {
        return <>самозанятый и договор заключен</>;
    }
    if (_onboardingUserType === "fl" && allDocs === 0) {
        return (
            <FlNotAllDocs
                email={email}
                onboardingUserType={_onboardingUserType}
                setOnboardingUserType={setOnboardingUserType}
            />
        );
    }
    if (_onboardingUserType === "fl" && allDocs === 1) {
        return <>физическое лицо и договор заключен</>;
    }
    if (_onboardingUserType === "ip" && allDocs === 0) {
        return (
            <SeNotAllDocs
                email={email}
                onboardingUserType={_onboardingUserType}
                setOnboardingUserType={setOnboardingUserType}
            />
        );
    }
    if (_onboardingUserType === "ip" && allDocs === 1) {
        return <>индивидуальный предприниматель и договор заключен</>;
    }
    if (_onboardingUserType === "ul" && allDocs === 0) {
        return (
            <SeNotAllDocs
                email={email}
                onboardingUserType={_onboardingUserType}
                setOnboardingUserType={setOnboardingUserType}
            />
        );
    }
    if (_onboardingUserType === "ul" && allDocs === 1) {
        return <>юридическое лицо и договор заключен</>;
    }
    return <>не известный _onboardingUserType</>;
}

export default Fields;
