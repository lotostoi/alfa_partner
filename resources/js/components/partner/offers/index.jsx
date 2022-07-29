import style from "./style.module.scss";
import Slider from "./slider/slider";
import OfferPageHeader from "./header";
import Paginator from "../../common/pagination";

import OffersList from "./offers-list";
import { useState } from "react";

const carts = [
    {
        title: "Получите 1000 ₽ с Альфа‑Картой",
        additionalText: "Закажите до 31 мая",
        src: "./assets/img/offers/slider-image-1.png",
    },
    {
        title: "Получите 1000 ₽ с Альфа‑Картой",
        additionalText: "Закажите до 31 мая",
        src: "./assets/img/offers/slider-image-1.png",
    },
];

export default function () {
    const [viewOfOffers, setViewOfOffers] = useState();

    return (
        <div className={style.wrapper}>
            <Slider carts={carts} />
            <div style={{ overflowY: "auto" }}>
                <OfferPageHeader setViewOfOffers={setViewOfOffers} />
                <OffersList viewOfOffers={viewOfOffers} />
                <Paginator />
            </div>
        </div>
    );
}
