import Blockings from './blockings.jsx';

import {connect} from "react-redux";

import {toggleFilter} from "../../../../store/actions/filterActions";

const mapDispatchToProps = {
    toggleFilter: toggleFilter,
};

export default connect(null, mapDispatchToProps)(Blockings);
