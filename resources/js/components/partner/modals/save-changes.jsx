import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

import { ModalDesktop } from "@alfalab/core-components/modal/desktop";
import { CrossMIcon } from "@alfalab/icons-glyph/CrossMIcon";
import { IconButton } from "@alfalab/core-components/icon-button";
import { Button } from "@alfalab/core-components/button";
import { Typography } from "@alfalab/core-components/typography";

function ModalSaveChangesProfile() {
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                view="primary"
                size="m"
                onClick={handleModalOpen}
                className="mt-4"
            >
                Сохранить
            </Button>
            <ModalDesktop
                open={open}
                onClose={handleModalOpen}
                size="s"
                className="modal-wrapper"
            >
                <div className="header-wrapper-modal">
                    <Typography.Text tag="p" className="mb-0 header-text">
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

                <ModalDesktop.Content>
                    <Typography.Text
                        tag="p"
                        className="mb-0 content-modal-text"
                    >
                        Вы уверенны, что хотите покинуть
                    </Typography.Text>

                    <Typography.Text
                        tag="p"
                        className="mb-0 content-modal-text"
                    >
                        страницу без сохранения
                    </Typography.Text>
                    <Typography.Text
                        tag="p"
                        className="mb-0 content-modal-text"
                    >
                        изменений
                    </Typography.Text>
                </ModalDesktop.Content>
                <div className="header-footer-modal">
                    <Button view="secondary" style={{ width: 188 }}>
                        Не сохранять
                    </Button>
                    <Button view="primary" style={{ width: 188 }}>
                        Сохранить
                    </Button>
                </div>
            </ModalDesktop>
        </>
    );
}

export default ModalSaveChangesProfile;
