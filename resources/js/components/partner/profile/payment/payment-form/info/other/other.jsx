import { Button } from "@alfalab/core-components/button";
import style from "./style.module.scss";

export default function () {
    return (
        <div className={style.se_agree_contract_wrapper}>
            <h3 className={style.title}>
                Для заключения договора необходимо открыть ИП, ООО или
                Самозанятость
            </h3>
            <div className={style.content_fl_not_all_docs}>
                <div className={style.block}>
                    <p className={style.title}>
                        Открыть ИП или ООО можно бесплатно без поездки в офис
                        или налоговую в Альфа-Банке
                    </p>
                    <Button className={style.btn} size="xs">
                        Узнать подробее о регистрации ИП или ООО
                    </Button>
                    <a className={style.link} size="xs">
                        Узнать подробее о регистрации ИП или ООО
                    </a>
                </div>
                <div className={style.block}>
                    <p className={style.title}>
                        Открыть ИП или ООО можно бесплатно без поездки в офис
                        или налоговую в Альфа-Банке
                    </p>
                    <Button className={style.btn} size="xs">
                        Стать самозанятым
                    </Button>
                    <a className={style.link} size="xs">
                        Стать самозанятым
                    </a>
                </div>
                <div className={style.block}>
                    <p className={style.title}>
                        Если у вас уже есть ООО, ИП или статус самозанятого -
                        выберите эту форму сотрудничества в поле выше.
                    </p>
                </div>
            </div>
        </div>
    );
}
