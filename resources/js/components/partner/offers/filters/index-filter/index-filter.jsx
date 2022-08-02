import style from "./style.module.scss";
import Collapse from "@c/common/collapse";
import CheckboxGroup from "@c/common/checkbox-group";

export default function () {
    return (
        <div className={style.wrapper}>
            <Collapse title="Офферы">
                <CheckboxGroup
                    className="mt-3"
                    defaultField="all"
                    fields={[
                        { name: "all", label: "Все" },
                        { name: "connected", label: "Подключенные" },
                        { name: "notConnected", label: "Не подключенные" },
                    ]}
                />
            </Collapse>

            <Collapse title="Продукт" className="mt-3">
                <CheckboxGroup
                    className="mt-3"
                    defaultField="all"
                    fields={[
                        { name: "all", label: "Все" },
                        { name: "kn", label: "Кредиты наличными" },
                        { name: "dc", label: "Дебетовая карта" },
                        { name: "сс", label: "Кредитная карта" },
                        { name: "mor", label: "Ипотека" },
                        { name: "rko", label: "РКО" },
                        { name: "invest", label: "Инвестиции" },
                        { name: "investMob", label: "Инвестиции Mob" },
                        { name: "dcMob", label: "Дебетовая карта Mob" },
                    ]}
                />
            </Collapse>
        </div>
    );
}
