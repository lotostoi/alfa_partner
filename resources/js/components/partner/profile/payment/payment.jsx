import {
    useGetUserQuery,
    useGetDataForSelectsProfilePaymentQuery,
} from "@s/user/user.api";

import PaymentForm from "./payment-form";

function Payment() {
    const { isLoading: isFetchingUser, data: user } = useGetUserQuery();
    const { isLoading: isFetchingData, data: dataForSelects } =
        useGetDataForSelectsProfilePaymentQuery();

    if (isFetchingUser || isFetchingData) return <span> loading ...</span>;

    return <PaymentForm user={user} dataForSelects={dataForSelects} />;
}

export default Payment;
