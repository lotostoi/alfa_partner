import style from "./style.module.scss";

export default function ({ data }) {
    const { title, additionalText, src } = data;
    return (
        <div className={style.wrapper}>
            <div className={style.text}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.additional_text}>{additionalText}</p>
            </div>
            <div>
                <img src={src} alt="img" />
            </div>
        </div>
    );
}
