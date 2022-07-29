import { Button } from "@alfalab/core-components/button";
import { FilterMIcon } from "@alfalab/icons-glyph/FilterMIcon";

export default function ({ toggleFilter }) {
    return (
        <Button
            leftAddons={<FilterMIcon />}
            type="button"
            view="tertiary"
            size="xxs"
            className="me-3"
            onClick={() => toggleFilter()}
        >
            Фильтр
        </Button>
    );
}
