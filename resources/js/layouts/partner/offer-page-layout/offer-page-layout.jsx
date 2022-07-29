
import style from "./style.module.scss";

function OfferPageLayout({ text, DefaultIndexBodyPage }) {

    return (
        <div className={style.wrapper}>
            <div className={style.title}>{text}</div>

            <DefaultIndexBodyPage />
        </div>
    );
}

export default OfferPageLayout;
