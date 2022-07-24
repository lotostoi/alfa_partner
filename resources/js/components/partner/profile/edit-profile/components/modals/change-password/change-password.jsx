import React, { useState } from "react";
import { ModalDesktop } from "@alfalab/core-components/modal/desktop";
import { CrossMIcon } from "@alfalab/icons-glyph/CrossMIcon";
import { IconButton } from "@alfalab/core-components/icon-button";
import { Button } from "@alfalab/core-components/button";
import { Typography } from "@alfalab/core-components/typography";
import { PasswordInput } from "@alfalab/core-components/password-input";
import NewPassword from "./new-password";
import RepeatPassword from "./repeate-password";

import style from "./style.module.scss";
import { useEffect } from "react";

function ModalSaveChangesProfile() {
    const [open, setOpen] = useState(false);

    const [oldPasswordVisible, setOldPasswordVisible] = useState(false);

    const [newPassword, setNewPassword] = useState(null);
    const [newPasswordIsValid, setNewPasswordIsValid] = useState(false);

    const [newRepeatPassword, setRepeatPassword] = useState(null);
    const [newRepeatPasswordIsValid, setRepeatPasswordIsValid] =
        useState(false);

    const [isDisabled, setIsDisabled] = useState(false);

    const handleModalOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    useEffect(() => {
        setIsDisabled(newRepeatPasswordIsValid || !newPasswordIsValid);
    }, [newPasswordIsValid, newRepeatPasswordIsValid]);

    return (
        <>
            <a href="" onClick={handleModalOpen} className={style.show_modal}>
                Изменить пароль
            </a>
            <ModalDesktop
                open={open}
                onClose={handleModalOpen}
                size="s"
                className={style.wrapper}
                wrapperClassName="p-0"
            >
                <div className={style.header}>
                    <Typography.Text tag="p" className={style.title}>
                        Изменить пароль
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
                    <PasswordInput
                        block
                        label="Старый пароль"
                        passwordVisible={oldPasswordVisible}
                        onPasswordVisibleChange={(visible) => {
                            setOldPasswordVisible(visible);
                        }}
                    />

                    <button className={style.sub_title}>
                        Восстановить пароль
                    </button>

                    <NewPassword
                        className="mb-3 w-100"
                        value={setNewPassword}
                        isValid={setNewPasswordIsValid}
                    />

                    <RepeatPassword
                        new-password={newPassword}
                        className="mb-3 w-100"
                        value={setRepeatPassword}
                        isValid={setRepeatPasswordIsValid}
                    />
                </ModalDesktop.Content>

                <div className={style.footer}>
                    <Button
                        view="secondary"
                        className={style.btn}
                        onClick={() => setOpen(false)}
                    >
                        Отменить
                    </Button>
                    <Button
                        view="primary"
                        className={style.btn}
                        disabled={isDisabled}
                    >
                        Сохранить
                    </Button>
                </div>
            </ModalDesktop>
        </>
    );
}

export default ModalSaveChangesProfile;
