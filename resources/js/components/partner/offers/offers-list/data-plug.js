import { uniqueId } from "lodash";

export default () => {
    let count = 200;

    const arrayOffers = [];

    while (count) {
        count--;
        arrayOffers.push({
            offerId: uniqueId(),
            imgUrl: "/assets/img/offers/offer-image.svg",
            title: "Кредитная карта AlfaTravel",
            tags: [
                {
                    key: 1,
                    content: "Популярный у блоггеров",
                },
                {
                    key: 2,
                    content: "Подходит новичкам",
                },
                {
                    key: 3,
                    content: "Акция",
                },
            ],
            rates: [
                {
                    key: "order",
                    title: "За заявку:",
                    rate: 800,
                    info: "Текст подсказки...",
                },
                {
                    key: "activation",
                    title: "За активацию:",
                    rate: 2500,
                    info: "Текст подсказки...",
                },
            ],

            cashback: {
                title: "Кешбэк А:",
                value: "5%",
                info: "Текст подсказки...",
            },

            moreInfoUrl: "#",
        });
    }

    return arrayOffers;
};
