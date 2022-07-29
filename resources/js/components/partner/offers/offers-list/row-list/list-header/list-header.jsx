import style from "./style.module.scss";

import Hint from "@c/common/hint";

export default function () {
    return (
        <div className={style.wrapper}>
            <div className={style.col_image}>Фото</div>
            <div className={style.col_title}>Название</div>
            <div className={style.col_action}>
                <div className={style.action}>Целевое действие</div>
                <div className={style.payment}>
                    Выплата с НДС
                    <Hint
                        size={12}
                        text="Информация..."
                        className={style.hint}
                    />
                </div>
            </div>
            <div className={style.col_cashback}>
                Кешбэк А
                <Hint size={12} text="Информация..." className={style.hint} />
            </div>
        </div>
    );
}
