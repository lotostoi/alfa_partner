import BodyForm from "./components/body-form/body-form";
import ModalSaveChangesProfile from "../../modals/save-changes";
import SubscribeComponent from "./components/subscribe-component";

function EditProfile() {
    return (
        <form action="" className="mt-3">
            <BodyForm />
            <SubscribeComponent />
            <ModalSaveChangesProfile />
        </form>
    );
}

export default EditProfile;
