import React from "react";
import style from "./style.module.scss";
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
                <div className="d-flex justify-content-start align-items-center mb-2">
                    <Radio
                        onChange={handleChangeSubscribedAll}
                        checked={checkedSubscribedAll}
                        label="Подписаться на все новости"
                        name="subscribe"
                    />
                    <span className={style.info_icon}></span>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2">
                    <Radio
                        onChange={handleChangeSubscribedOnlyMy}
                        checked={checkedSubscribedOnlyMy}
                        label="Подписаться только на мои новости"
                        name="subscribe"
                    />
                    <span className={style.info_icon}></span>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2">
                    <Radio
                        onChange={handleChangeUnSubscribed}
                        checked={checkedUnSubscribed}
                        label="Отказаться от подписки"
                        name="subscribe"
                    />
                    <span className={style.info_icon}></span>
                </div>
            </div>
        </div>
    );
}

export default SubscribeComponent;
