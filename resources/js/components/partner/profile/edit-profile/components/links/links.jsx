import DeleteAccount from "../modals/delete-account";
import ChangePassword from "../modals/change-password";

import style from "./style.module.scss";

export default function () {
    return (
        <div className={style.links}>
            <DeleteAccount />
            <ChangePassword />
            <a className={style.link}>Изменить Email</a>
        </div>
    );
}
