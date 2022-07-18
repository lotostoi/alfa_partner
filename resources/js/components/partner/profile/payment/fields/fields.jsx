import SeNotAllDocs from "./se-not-all-docs-fields";

function Fields({ allDocs, onboardingUserType, email }) {
    if (onboardingUserType === "se" && allDocs === 0) {
        return (
            <SeNotAllDocs
                email={email}
                onboardingUserType={onboardingUserType}
            />
        );
    }
    if (onboardingUserType === "se" && allDocs === 1) {
        return <>самозанятый и договор заключен</>;
    }
    if (onboardingUserType === "fl" && allDocs === 0) {
        return <>физическое лицо и договор не заключен</>;
    }
    if (onboardingUserType === "fl" && allDocs === 1) {
        return <>физическое лицо и договор заключен</>;
    }
    if (onboardingUserType === "ip" && allDocs === 0) {
        return <>индивидуальный предприниматель и договор не заключен</>;
    }
    if (onboardingUserType === "ip" && allDocs === 1) {
        return <>индивидуальный предприниматель и договор заключен</>;
    }
    if (onboardingUserType === "ul" && allDocs === 0) {
        return <>юридическое лицо и договор не заключен</>;
    }
    if (onboardingUserType === "ul" && allDocs === 1) {
        return <>юридическое лицо и договор заключен</>;
    }
    return <>не известный onboardingUserType</>;
}

export default Fields;
