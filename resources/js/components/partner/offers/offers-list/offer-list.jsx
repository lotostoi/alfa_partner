import style from "./style.module.scss";

import dataPlug from "./data-plug";
import CartList from "./card-list";
import RowList from "./row-list";
const offers = dataPlug();

export default function ({ viewOfOffers }) {
    return (
        <div className={style.wrapper}>
            {viewOfOffers === "row" ? (
                <CartList offers={offers} />
            ) : (
                <RowList offers={offers} />
            )}
        </div>
    );
}
