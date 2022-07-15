import { PasswordInput } from "@alfalab/core-components/password-input";
import { isNumber } from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import style from "./style.module.scss";

export default function (props) {
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [startValid, setStartValid] = useState(false);
    const [isRepeatPassword, setIsRepeatPassword] = useState(false);
    const [value, setValue] = useState("");

    const onChangeHandler = (e) => {
        const value = e.target.value;

        if (value.length && !startValid) {
            setStartValid(true);
        }

        setValue(value);
    };

    useEffect(() => {
        setIsRepeatPassword(value === props["new-password"]);
        props.isValid(value !== props["new-password"]);
    }, [value, props["new-password"]]);

    return (
        <div className={props.className}>
            <div className={style.input_wrapper}>
                <PasswordInput
                    block
                    label="Новый пароль"
                    passwordVisible={newPasswordVisible}
                    onPasswordVisibleChange={(visible) => {
                        setNewPasswordVisible(visible);
                    }}
                    value={value}
                    onChange={onChangeHandler}
                />
                {startValid ? (
                    <div className={style.message}>
                        <span
                            className={
                                style.password_equal +
                                " " +
                                (isRepeatPassword ? style.success : style.error)
                            }
                        >
                            Пароль совпадает
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
