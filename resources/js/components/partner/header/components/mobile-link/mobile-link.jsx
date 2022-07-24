import { IconButton } from "@alfalab/core-components/icon-button";
import { useNavigate, useParams } from "react-router-dom";
import { getUrlByKey } from "@/router";

import setActiveClassHocComponent from "@/hoc/active-class";

export default setActiveClassHocComponent(({ icon, activeClass }) => {
    const navigate = useNavigate();

    return (
        <IconButton
            view="primary"
            size="s"
            icon={icon}
            className={activeClass}
            style={
                activeClass
                    ? {
                          background: "rgba(59, 82, 108, 1)",
                          height: 36,
                          borderRadius: 18,
                          color: "#fff",
                      }
                    : { color: "#fff" }
            }
            onClick={() => navigate(getUrlByKey("news"))}
        />
    );
});
