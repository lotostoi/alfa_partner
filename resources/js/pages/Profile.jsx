import React from "react";
import ReactDOM from "react-dom";

import Header from "../components/header";
import { ListHeader } from "@alfalab/core-components/list-header";
import { CardImage } from "@alfalab/core-components/card-image";

function Profile() {
    return (
        <div>
            <Header />

            <div className="mt-3 p-3">
                <ListHeader title="Профиль" description="партнера" />
                <div className="container">
                    <CardImage
                        cardId="EG"
                        width={800}
                        rounded={false}
                        baseUrl="https://online.alfabank.ru/cards-images/cards/"
                        className="some name"
                        id="some id"
                        dataTestId="test id"
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
