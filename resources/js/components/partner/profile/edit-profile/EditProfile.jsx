import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@alfalab/core-components/link";
import { Input } from "@alfalab/core-components/input";
import { Select } from "@alfalab/core-components/select";
import ModalSaveChangesProfile from "../../modals/save-changes";
import SubscribeComponent from "./SubscribeComponent";

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

function EditProfile() {
    return (
        <form action="" className="mt-3">
            <h4>Профиль</h4>

            <div
                className="bg-light p-4"
                style={{ maxWidth: 900, borderRadius: 12 }}
            >
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
                <div className="d-flex justify-content-start align-items-center mt-3">
                    <Link view="secondary" style={{ fontSize: 14 }}>
                        Удалить аккаунт
                    </Link>
                    <Link
                        view="secondary"
                        className="ms-3"
                        style={{ fontSize: 14 }}
                    >
                        Изменить пароль
                    </Link>
                    <Link
                        view="secondary"
                        className="ms-3"
                        style={{ fontSize: 14 }}
                    >
                        Изменить Email
                    </Link>
                </div>
            </div>
            <SubscribeComponent />
            <ModalSaveChangesProfile />
        </form>
    );
}

export default EditProfile;
