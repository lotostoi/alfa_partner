import style from "./style.module.scss";
import { IconButton } from "@alfalab/core-components/icon-button";
import { ScheduleMIcon } from "@alfalab/icons-glyph/ScheduleMIcon";
import { TileMIcon } from "@alfalab/icons-glyph/TileMIcon";
import { useState } from "react";

export default function ({ className, getValue }) {
    const [value, setValue] = useState(
        localStorage.getItem("switchViewOffers")
            ? localStorage.getItem("switchViewOffers")
            : "default"
    );

    const handler = (_value) => {
        setValue(_value);
        getValue(_value);
        localStorage.setItem("switchViewOffers", _value);
    };

    return (
        <div className={style.wrapper + " " + className}>
            <IconButton
                view="primary"
                size="xxs"
                icon={ScheduleMIcon}
                onClick={() => handler("default")}
                className={value === "default" ? style.active : style.default}
            />
            <IconButton
                view="primary"
                size="xxs"
                icon={TileMIcon}
                onClick={() => handler("row")}
                className={value === "row" ? style.active : style.default}
            />
        </div>
    );
}
