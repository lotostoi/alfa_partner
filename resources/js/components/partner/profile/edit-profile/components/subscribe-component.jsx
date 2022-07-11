import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";

import { Radio } from "@alfalab/core-components/radio";

function SubscribeComponent() {
    const [checkedSubscribedAll, setCheckedSubscribedAll] =
        React.useState(false);

    const [checkedSubscribedOnlyMy, setCheckedSubscribedOnlyMy] =
        React.useState(false);
    const [checkedUnSubscribed, setCheckedUnSubscribed] = React.useState(false);

    const handleChangeSubscribedAll = () => {
        setCheckedSubscribedAll(!checkedSubscribedAll);
    };

    const handleChangeSubscribedOnlyMy = () => {
        setCheckedSubscribedOnlyMy(!checkedSubscribedOnlyMy);
    };

    const handleChangeUnSubscribed = () => {
        setCheckedUnSubscribed(!checkedUnSubscribed);
    };

    useEffect(() => {
        if (checkedSubscribedAll) {
            setCheckedUnSubscribed(false);
            setCheckedSubscribedOnlyMy(false);
        }
    }, [checkedSubscribedAll]);
    useEffect(() => {
        if (checkedSubscribedOnlyMy) {
            setCheckedUnSubscribed(false);
            setCheckedSubscribedAll(false);
        }
    }, [checkedSubscribedOnlyMy]);
    useEffect(() => {
        if (checkedUnSubscribed) {
            setCheckedSubscribedAll(false);
            setCheckedSubscribedOnlyMy(false);
        }
    }, [checkedUnSubscribed]);

    return (
        <div className="p-4 mt-4 border" style={{ borderRadius: 12 }}>
            <p>Email рассылка</p>
            <div className="d-flex flex-column">
                <Radio
                    onChange={handleChangeSubscribedAll}
                    checked={checkedSubscribedAll}
                    label="Подписаться на все новости"
                    className="mb-2"
                    name="subscribe"
                />
                <Radio
                    onChange={handleChangeSubscribedOnlyMy}
                    checked={checkedSubscribedOnlyMy}
                    label="Подписаться только на мои новости"
                    className="mb-2"
                    name="subscribe"
                />
                <Radio
                    onChange={handleChangeUnSubscribed}
                    checked={checkedUnSubscribed}
                    label="Отказаться от подписки"
                    className="mb-2"
                    name="subscribe"
                />
            </div>
        </div>
    );
}

export default SubscribeComponent;
