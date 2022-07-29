import OfferPageLayout from "../../layouts/partner/offer-page-layout";
import IndexOfferPage from "@c/partner/offers";

function OfferPage(props) {
    return <OfferPageLayout {...props} DefaultIndexBodyPage={IndexOfferPage} />;
}

export default OfferPage;
