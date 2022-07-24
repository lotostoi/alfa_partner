import React from "react";
import style from "./style.module.scss";
import { useEffect } from "react";

import { Tooltip } from "@alfalab/core-components/tooltip";

import Links from "../../links";

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
        <div className={style.wrapper}>
            <p>Email рассылка</p>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-start align-items-center mb-2">
                    <Radio
                        onChange={handleChangeSubscribedAll}
                        checked={checkedSubscribedAll}
                        label="Подписаться на все новости"
                        name="subscribe"
                        contentClassName={style.label}
                    />

                    <div>
                        <Tooltip
                            content={<div>Информация ...</div>}
                            position="right"
                            view="hint"
                            trigger="click"
                        >
                            <span className={style.info_icon}></span>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2">
                    <Radio
                        onChange={handleChangeSubscribedOnlyMy}
                        checked={checkedSubscribedOnlyMy}
                        label="Подписаться только на мои новости"
                        name="subscribe"
                    />
                    <div>
                        <Tooltip
                            content={<div>Информация ...</div>}
                            position="right"
                            view="hint"
                            trigger="click"
                        >
                            <span className={style.info_icon}></span>
                        </Tooltip>
                    </div>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2">
                    <Radio
                        onChange={handleChangeUnSubscribed}
                        checked={checkedUnSubscribed}
                        label="Отказаться от подписки"
                        name="subscribe"
                    />
                    <div>
                        <Tooltip
                            content={<div>Информация ...</div>}
                            position="right"
                            view="hint"
                            trigger="click"
                        >
                            <span className={style.info_icon}></span>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="d-flex d-md-none">
                <Links />
            </div>
        </div>
    );
}

export default SubscribeComponent;
