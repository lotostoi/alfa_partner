import { Input } from "@alfalab/core-components/input";
import { Select } from "@alfalab/core-components/select";

import style from "./style.module.scss";

const options = [
    { key: "1", content: "Neptunium" },
    { key: "2", content: "Plutonium" },
    { key: "3", content: "Americium" },
    { key: "4", content: "Curium" },
    { key: "5", content: "Berkelium" },
    { key: "6", content: "Californium" },
    { key: "7", content: "Einsteinium" },
    { key: "8", content: "Fermium" },
];

export default function () {
    return (
        <div className={style["body-form"]}>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <Input label="Имя/Ник" name="name" className="w-100" />
                    <br />
                    <Input label="Телефон" name="phone" className="w-100" />
                    <br />
                    <Input
                        label="Ссылка на ваш основной сайт"
                        name="phone"
                        className="w-100"
                    />
                </div>
                <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                    <Select
                        options={options}
                        label="Кто вы"
                        placeholder="Кто вы"
                        className="w-100"
                    />
                    <br />
                    <Input label="Email" name="email" className="w-100" />
                    <br />
                    <Input label="Страна" name="phone" className="w-100" />
                </div>
            </div>
            <div className={style.links}>
                <a className={style.link}>Удалить аккаунт</a>
                <a className={style.link}>Изменить пароль</a>
                <a className={style.link}>Изменить Email</a>
            </div>
        </div>
    );
}
