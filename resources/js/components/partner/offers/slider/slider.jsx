import { now } from "lodash";
import Card from "./card";
import style from "./style.module.scss";

export default function ({ carts }) {
    return (
        <div className={style.wrapper}>
            {carts.map((data, i) => {
                return <Card data={data} key={i} />;
            })}
        </div>
    );
}
