import Orders from './orders.jsx';

import {connect} from "react-redux";

import {toggleFilter} from "@s/actions/filterActions";

const mapDispatchToProps = {
    toggleFilter: toggleFilter,
};

export default connect(null, mapDispatchToProps)(Orders);
