import React from "react";
import ReactDOM from "react-dom";

import { Link as LinkComponent } from "@alfalab/core-components/link";


function Header() {
    return (
        <nav className="d-flex justify-content-start align-item-center my-5">
            <LinkComponent href="/" className="mx-2 d-flex">
                Профиль
            </LinkComponent>
            <LinkComponent href="/news" className="mx-2 d-flex">
                Новости
            </LinkComponent>
        </nav>
    );
}

export default Header;
