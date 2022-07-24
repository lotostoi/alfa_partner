import React, { useState } from "react";
import { ModalDesktop } from "@alfalab/core-components/modal/desktop";
import { CrossMIcon } from "@alfalab/icons-glyph/CrossMIcon";
import { IconButton } from "@alfalab/core-components/icon-button";
import { Button } from "@alfalab/core-components/button";
import { Typography } from "@alfalab/core-components/typography";
import { PasswordInput } from "@alfalab/core-components/password-input";

import style from "./style.module.scss";

function ModalSaveChangesProfile() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [open, setOpen] = useState(false);

    const handleModalOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    return (
        <>
            <a href="" onClick={handleModalOpen} className={style.show_modal}>
                Удалить аккаунт
            </a>
            <ModalDesktop
                open={open}
                onClose={handleModalOpen}
                size="s"
                className={style.wrapper}
                wrapperClassName="p-0"
            >
                <div className={style.header}>
                    <Typography.Text tag="p" className={style.title}>Удалить аккаунт
                    </Typography.Text>
                    <IconButton
                        view="primary"
                        size="xxs"
                        icon={CrossMIcon}
                        className="mb-0 header-text"
                        onClick={handleModalOpen}
                    />
                </div>

                <ModalDesktop.Content className={style.content}>
                    <p className={style.text}>
                        Вы действительно хотите удалить аккаунт?
                        <br /> При удалении аккаунта все данные будут
                        <br /> потеряны.
                    </p>
                    <PasswordInput
                        block
                        label="Пароль"
                        passwordVisible={passwordVisible}
                        onPasswordVisibleChange={(visible) => {
                            setPasswordVisible(visible);
                        }}
                        hint="Для удаления аккаунта необходимо ввести пароль"
                    />
                </ModalDesktop.Content>

                <div className={style.footer}>
                    <Button view="secondary" className={style.btn} onClick={() => setOpen(false)}>
                        Отменить
                    </Button>
                    <Button view="primary" className={style.btn}>
                        Удалить
                    </Button>
                </div>
            </ModalDesktop>
        </>
    );
}

export default ModalSaveChangesProfile;
