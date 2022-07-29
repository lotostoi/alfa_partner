import style from "./style.module.scss";

export default function ({
    imgUrl,
    tags,
    title,
    rates,
    cashback,
    moreInfoUrl,
}) {
    const maxSum = rates.find(({ key }) => key === "activation")?.rate;

    return (
        <div className={style.wrapper}>
            <div className={style.col_image}>
                <img src={imgUrl} alt="img-offer" />
            </div>
            <div className={style.col_title}>{title}</div>
            <div className={style.col_title}>
                Активация карты:
                <span className={style.value}> до {maxSum} ₽</span>
            </div>
            <div className={style.col_cashback}>{cashback.value}</div>
        </div>
    );
}
