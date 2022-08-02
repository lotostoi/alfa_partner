import style from "./style.module.scss";
import BtnToggleFilter from "@c/common/buttons/btn-toggle-filter";
import BtnFilterResultAndClear from "@c/common/buttons/btn-filter-result-and-clear";
import BntSwitchViewOffers from "./btn-switch-view-offers.";
import { PickerButton } from "@alfalab/core-components/picker-button";

import IndexFilter from "../filters/index-filter";

const options = [{ key: "default", content: "Сортировать по умолчанию" }];

export default function ({ setViewOfOffers }) {
    return (
        <div className={style.wrapper}>
            <BtnToggleFilter>
                <IndexFilter />
            </BtnToggleFilter>

            <BtnFilterResultAndClear
                resultContent="7"
                total="55 оферов"
                clearFilter={() => console.log("clear-filter")}
            />
            {/*       <PickerButton
                label="Picker button"
                options={options}
                size="xxs"
                selected={"default"}
                className="ms-auto"
            /> */}
            <BntSwitchViewOffers
                className="ms-auto"
                getValue={(value) => setViewOfOffers(value)}
            />
        </div>
    );
}
