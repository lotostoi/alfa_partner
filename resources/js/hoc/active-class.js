import { useLocation } from "react-router-dom";
import { getUrlByKey } from "@/router";

export default (Component) => {
    return (props) => {
        const { pathname } = useLocation();
        const isActiveClass = pathname.startsWith(
            "/" + getUrlByKey(props.urlKey)
        );

        return <Component {...props} activeClass={isActiveClass} />;
    };
};
