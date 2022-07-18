import { useEffect } from "react";
import { useGetUserQuery } from "../../../../store/user/user.api";
import Fields from "./fields";

function Payment() {
    const { isLoading, data: user } = useGetUserQuery();

    if (isLoading) return <span> loading ...</span>;

    const {
        all_docs: allDocs,
        onboarding_user_type: onboardingUserType,
        email,
    } = user;

    return (
        <form style={{ marginTop: 32 }}>
            <Fields
                allDocs={allDocs}
                onboardingUserType={onboardingUserType}
                email={email}
            />
        </form>
    );
}

export default Payment;
