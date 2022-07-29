import { Button } from "@alfalab/core-components/button";
import style from "./style.module.scss";

export default function () {
    return (
        <div className={style.se_agree_contract_wrapper}>
            <h3 className={style.title}>
                Чтобы получить выплаты – заключите договор
            </h3>
            <div className={style.content}>
                <p>
                    Выплата вознаграждений будет поступать на реквизиты,
                    указанные в договоре.
                </p>

                <p style={{ marginBottom: 0 }}>
                    Без договора можно привлекать партнеров и зарабатывать, но
                    есть ограничения:
                </p>
                <ul>
                    <li>
                        Выплату можно получить только после заключения договора.
                    </li>
                    <li>
                        Выплата осуществляется только на расчетный счет ООО, ИП
                        или самозанятого
                    </li>
                    <li>
                        ООО и ИП должны иметь рекламные ОКВЭД и соответствовать
                        <br />
                        <a href="">требованиям службы безопасности</a>
                    </li>

                    <li>
                        Оплачиваются целевые действия только с первых 1000
                        заявок. После заключения договора - без ограничений
                    </li>
                    <li>
                        Если договор не подписан в течении 90 календарных дней с
                        момента получения первой ссылки - выплата не
                        производится.
                    </li>
                    <li>
                        Читать полные условия работы до подписания договора.
                    </li>
                </ul>
                <Button block={false} style={{ width: 178 }} size="xs">
                    Заключить договор
                </Button>
            </div>
        </div>
    );
}