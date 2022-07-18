import style from "./style.module.scss";

import { Input } from "@alfalab/core-components/input";
import { Select } from "@alfalab/core-components/select";
import { Button } from "@alfalab/core-components/button";

const options = [
    { key: "se", content: "Самозанятость" },
    { key: "fl", content: "Физическое лицо" },
    { key: "ul", content: "Юридическое лицо (ООО)" },
    { key: "ip", content: "Индивидуальный предприниматель" },
];

export default function ({ email, onboardingUserType }) {
    return (
        <>
            <div className={style.wrapper_fields}>
                <div className="col-12 col-lg-6" style={{ padding: "0 10px" }}>
                    <Select
                        options={options}
                        label="Форма сотрудничества"
                        placeholder="Форма сотрудничества"
                        block
                        selected={
                            options.find(
                                ({ key }) => key === onboardingUserType
                            )?.key
                        }
                    />
                    <Input
                        label="Тип налогооблажения"
                        name="taxation"
                        value="НПД – плачу налоги как самозанятый"
                        block
                        className="mt-4"
                    />
                </div>
                <div
                    className="col-12 col-lg-6 mt-4 mt-lg-0"
                    style={{ padding: "0 10px" }}
                >
                    <Input
                        label="Период оплаты"
                        name="payment_period"
                        value="1 месяц"
                        block
                    />
                    <Input
                        label="ФИО"
                        name="full_name"
                        value={email}
                        block
                        className="mt-4"
                    />
                </div>
            </div>

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
                        Без договора можно привлекать партнеров и зарабатывать,
                        но есть ограничения:
                    </p>
                    <ul>
                        <li>
                            Выплату можно получить только после заключения
                            договора.
                        </li>
                        <li>
                            Выплата осуществляется только на расчетный счет ООО,
                            ИП или самозанятого
                        </li>
                        <li>
                            ООО и ИП должны иметь рекламные ОКВЭД и
                            соответствовать
                            <br />
                            <a href="">требованиям службы безопасности</a>
                        </li>

                        <li>
                            Оплачиваются целевые действия только с первых 1000
                            заявок. После заключения договора - без ограничений
                        </li>
                        <li>
                            Если договор не подписан в течении 90 календарных
                            дней с момента получения первой ссылки - выплата не
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
            <Button
                block={false}
                style={{ width: 164 }}
                size="s"
                view="primary"
                className="mt-4"
            >
                Сохранить
            </Button>
        </>
    );
}
