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

export default function ({ email, onboardingUserType, setOnboardingUserType }) {
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
                        onChange={(payload) =>
                            setOnboardingUserType(payload.selected.key)
                        }
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
                </div>
            </div>

            <div className={style.se_agree_contract_wrapper}>
                <h3 className={style.title}>
                    Для заключения договора необходимо открыть ИП, ООО или
                    Самозанятость
                </h3>
                <div className={style.content_fl_not_all_docs}>
                    <div className={style.block}>
                        <p className={style.title}>
                            Открыть ИП или ООО можно бесплатно без поездки в
                            офис или налоговую в Альфа-Банке{" "}
                        </p>
                        <Button className={style.btn} size="xs">
                            Узнать подробее о регистрации ИП или ООО
                        </Button>
                    </div>
                    <div className={style.block}>
                        <p className={style.title}>
                            Открыть ИП или ООО можно бесплатно без поездки в
                            офис или налоговую в Альфа-Банке
                        </p>
                        <Button className={style.btn} size="xs">
                            Стать самозанятым
                        </Button>
                    </div>
                    <div className={style.block}>
                        <p className={style.title}>
                            Если у вас уже есть ООО, ИП или статус самозанятого
                            - выберите эту форму сотрудничества в поле выше.
                        </p>
                    </div>
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
