import InfoFl from "./fl";
import InfoOther from "./other";

export default function ({ onboardingUserType }) {
    console.log(onboardingUserType);
    return onboardingUserType !== "fl" ? <InfoOther /> : <InfoFl />;
}
