import style from "./style.module.scss";
import ListHeader from "./list-header";
import OfferViewAsRow from "./cart-row";

export default function ({ offers }) {
    return (
        <div className={style.wrapper}>
            <ListHeader />
            <div>
                {offers.map((offer) => (
                    <OfferViewAsRow {...offer} key={offer.offerId} />
                ))}
            </div>
        </div>
    );
}
