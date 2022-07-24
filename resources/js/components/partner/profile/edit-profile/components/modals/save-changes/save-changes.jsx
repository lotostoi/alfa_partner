import React from "react";
import { ModalDesktop } from "@alfalab/core-components/modal/desktop";
import { CrossMIcon } from "@alfalab/icons-glyph/CrossMIcon";
import { IconButton } from "@alfalab/core-components/icon-button";
import { Button } from "@alfalab/core-components/button";
import { Typography } from "@alfalab/core-components/typography";

import style from "./style.module.scss";

function ModalSaveChangesProfile() {
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(!open);
    return (
        <>
            <div className={"d-none d-md-flex " + style.btn_wrapper}>
                <Button
                    type="button"
                    view="primary"
                    size="m"
                    onClick={handleModalOpen}
                    className={style.btn}
                >
                    Сохранить
                </Button>
            </div>
            <div className={"d-flex d-md-none " + style.btn_wrapper}>
                <Button
                    type="button"
                    size="m"
                    block
                    onClick={handleModalOpen}
                    className={style.btn}
                >
                    Сохранить
                </Button>
            </div>

            <ModalDesktop
                open={open}
                onClose={handleModalOpen}
                size="s"
                className={style.wrapper}
                wrapperClassName="p-0"
            >
                <div className={style.header_wrapper_modal}>
                    <Typography.Text tag="p" className={style.title}>
                        Сохранить изменения
                    </Typography.Text>
                    <IconButton
                        view="primary"
                        size="xxs"
                        icon={CrossMIcon}
                        className="mb-0 header-text"
                        onClick={handleModalOpen}
                    />
                </div>

                <ModalDesktop.Content className={style.content_wrapper_modal}>
                    <Typography.Text tag="p" className={style.content}>
                        Вы уверенны, что хотите покинуть страницу без сохранения
                        изменений
                    </Typography.Text>
                </ModalDesktop.Content>
                <div className={style.footer_wrapper_modal}>
                    <Button view="secondary" onClick={() => setOpen(false)}>
                        Не сохранять
                    </Button>
                    <Button view="primary">Сохранить</Button>
                </div>
            </ModalDesktop>
        </>
    );
}

export default ModalSaveChangesProfile;
