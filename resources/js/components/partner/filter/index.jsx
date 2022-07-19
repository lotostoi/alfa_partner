import Filter from './filter.jsx';

import {connect} from "react-redux";

import {toggleFilter} from "../../../store/actions/filterActions";

const mapDispatchToProps = {
    toggleFilter: toggleFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
