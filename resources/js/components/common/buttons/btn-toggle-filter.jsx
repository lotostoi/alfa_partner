import { Button } from "@alfalab/core-components/button";
import { FilterMIcon } from "@alfalab/icons-glyph/FilterMIcon";

import { connect } from "react-redux";

import { toggleFilter, setComponent } from "@s/actions/filterActions";
import { useEffect } from "react";
const mapStateToProps = (state) => ({ filter: state.filters.filter });
const mapDispatchToProps = {
    toggleFilter: toggleFilter,
    setComponent: setComponent,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(function ({ toggleFilter, setComponent, children, filter }) {
    const handler = () => {
        toggleFilter();
    };

    useEffect(() => {
        setComponent(children);
    }, [filter]);

    return (
        <Button
            leftAddons={<FilterMIcon />}
            type="button"
            view="tertiary"
            size="xxs"
            className="me-3"
            onClick={handler}
        >
            Фильтр
        </Button>
    );
});
