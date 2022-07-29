import style from "./style.module.scss";

import OfferViewAsCart from "./offer-view-as-cart";

export default function ({ offers }) {
    return (
        <div className={style.wrapper}>
            {offers.map((offer) => (
                <OfferViewAsCart key={offer.offerId} {...offer} />
            ))}
        </div>
    );
}
