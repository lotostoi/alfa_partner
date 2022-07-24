import BodyForm from "./components/body-form/body-form";
import ModalSaveChangesProfile from "./components/modals/save-changes";
import SubscribeComponent from "./components/body-form/subscribe";

import style from "./style.module.scss";

function EditProfile() {
    return (
        <form className={style.wrapper}>
            <BodyForm />
            <SubscribeComponent />
            <ModalSaveChangesProfile />
        </form>
    );
}

export default EditProfile;
