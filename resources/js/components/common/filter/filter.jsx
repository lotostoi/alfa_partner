import style from "./style.module.scss";
import { IconButton } from "@alfalab/core-components/icon-button";
import { CrossMIcon } from "@alfalab/icons-glyph/CrossMIcon";

import { connect } from "react-redux";

import { toggleFilter, setComponent } from "@s/actions/filterActions";
import { useEffect } from "react";

const mapStateToProps = (state) => ({
    filter: state.filters.filter,
    FilterComponent: state.filters.component,
});

const mapDispatchToProps = {
    toggleFilter: toggleFilter,
    setComponent: setComponent,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(function ({ filter, toggleFilter, setComponent, FilterComponent }) {
    useEffect(() => {
        filter ? setComponent(FilterComponent) : setComponent(null);
    }, [filter]);
    return (
        <form className={style.wrapper}>
            <div className={style.header}>
                <span className={style.title}>Фильтр</span>
                <IconButton
                    view="primary"
                    size="xxs"
                    icon={CrossMIcon}
                    onClick={() => toggleFilter()}
                />
            </div>
            {FilterComponent}
        </form>
    );
});
