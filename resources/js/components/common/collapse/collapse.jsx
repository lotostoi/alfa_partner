import style from "./style.module.scss";
import { IconButton } from "@alfalab/core-components/icon-button";
import { ExpandDownMBlackIcon } from "@alfalab/icons-classic/ExpandDownMBlackIcon";
import { useState } from "react";

export default function ({ title, children, className }) {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className={[style.wrapper, className].join(" ")}>
            <div className={style.header}>
                <span className={style.title}>{title}</span>
                <IconButton
                    className={style.icon + " " + (isShow && style.active)}
                    view="primary"
                    icon={ExpandDownMBlackIcon}
                    onClick={() => setIsShow(!isShow)}
                />
            </div>
            {isShow && <div className={style.content}>{children}</div>}
        </div>
    );
}
