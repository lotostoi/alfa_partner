import style from "./style.module.scss";
import { Tooltip } from "@alfalab/core-components/tooltip";
import { InformationCircleLineMIcon } from "@alfalab/icons-glyph/InformationCircleLineMIcon";

export default function ({ className, text, size }) {

    return (
        <Tooltip
            content={<div>{text}</div>}
            position="right"
            view="hint"
            trigger="click"
            className={className}
        >
            <InformationCircleLineMIcon width={size ? size: 22} className={style.icon_info} />
        </Tooltip>
    );
}
