import style from "./style.module.scss";
import { Tag } from "@alfalab/core-components/tag";
import { Button } from "@alfalab/core-components/button";

import Hint from "@c/common/hint";
import { NavLink } from "react-bootstrap";

export default function ({
    imgUrl,
    tags,
    title,
    rates,
    cashback,
    moreInfoUrl,
}) {
    return (
        <div className={style.wrapper}>
            <div className={style.image}>
                <img src={imgUrl} alt="offer-image" />
            </div>
            <div className={style.info}>
                <h5 className={style.title}>{title}</h5>
                <div className={style.tags}>
                    {tags &&
                        tags.map(({ content, key }) => (
                            <Tag className={style.tag} size="xxs" key={key}>
                                {content}
                            </Tag>
                        ))}
                </div>

                {rates &&
                    rates.map(({ title, rate, info }) => (
                        <div className={style.rate} key={rate}>
                            <p className={style.title}>{title}</p>
                            <div className={style.info}>
                                До {rate} ₽ с НДС
                                <Hint text={info} size={12} />
                            </div>
                        </div>
                    ))}

                {cashback ? (
                    <div className={style.cashback}>
                        <p className={style.title}>{cashback.title}</p>
                        <div className={style.info}>
                            {cashback.value}
                            <Hint text={cashback.value.info} size={12} />
                        </div>
                    </div>
                ) : null}

                <NavLink href={moreInfoUrl} className={style.link}>
                    Подробнее
                </NavLink>
                <Button size="xs" view="primary" className={style.button}>
                    Подключить
                </Button>
            </div>
        </div>
    );
}
