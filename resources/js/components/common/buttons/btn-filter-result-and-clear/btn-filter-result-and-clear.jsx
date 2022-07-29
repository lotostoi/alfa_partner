import { IconButton } from "@alfalab/core-components/icon-button";
import { CloseCircleMBlackIcon } from "@alfalab/icons-classic/CloseCircleMBlackIcon";


import style from "./style.module.scss";

export default function ({
    clearFilter,
    className,
    iconClassName,
    resultContent,
    total,
}) {
    return (
        <div className={style.wrapper + " " + className}>
            <span>{resultContent}</span>
            <span style={{ margin: "0 7px" }}>из</span>
            <span>{total}</span>
            <span
                style={{
                    color: "#DBDEE1",
                    fontSize: 20,
                    padding: "0 3px",
                }}
            >
                |
            </span>

            <IconButton
                view="primary"
                size="xs"
                className={iconClassName}
                icon={CloseCircleMBlackIcon}
                onClick={() => clearFilter()}
            />
        </div>
    );
}
