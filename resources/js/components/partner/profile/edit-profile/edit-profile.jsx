import BodyForm from "./components/body-form/body-form";
import ModalSaveChangesProfile from "./components/modals/save-changes";
import SubscribeComponent from "./components/body-form/subscribe";

import { useNavigate } from "react-router-dom";

import { logout } from "@/api/auth";
import { useGetUserQuery } from "../../../../store/user/user.api";

function EditProfile() {
    const navigate = useNavigate();

    const _logout = async (e) => {
        e.preventDefault();
        await logout();
        navigate("/login", { replace: true });
    };
    return (
        <form action="" className="mt-3">
            <div className="d-flex mb-2">
                <button
                    onClick={_logout}
                    className="btn btn-sm btn-danger ms-auto me-2"
                >
                    Выход
                </button>
            </div>
            <BodyForm />
            <SubscribeComponent />
            <ModalSaveChangesProfile />
        </form>
    );
}

export default EditProfile;
