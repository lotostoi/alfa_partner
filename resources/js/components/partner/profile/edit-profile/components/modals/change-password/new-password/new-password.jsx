import { PasswordInput } from "@alfalab/core-components/password-input";
import { isNumber } from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import style from "./style.module.scss";

export default function (props) {
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [startValid, setStartValid] = useState(false);
    const [isDanishLetters, setIsDanishLetters] = useState(false);
    const [isNumbers, setIsNumbers] = useState(false);
    const [isLength, setIsLength] = useState(false);
    const [value, setValue] = useState("");

    const onChangeHandler = (e) => {
        const value = e.target.value;

        setValue(value);

        props.value(value);

        if (value.length && !startValid) {
            setStartValid(true);
        }

        const _isDanishLetters = /[A-Za-z]/.test(value);
        const _isNumbers = /[0-9]/.test(value);
        const _isLength = value.length >= 8;

        setIsDanishLetters(_isDanishLetters);
        setIsNumbers(_isNumbers);
        setIsLength(_isLength);

        props.isValid(_isDanishLetters && _isNumbers && _isLength);
    };

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
                    onChange={onChangeHandler}
                    value={value}
                />
                {startValid ? (
                    <div className={style.message}>
                        <span
                            className={
                                style.danish_letters +
                                " " +
                                (isDanishLetters ? style.success : style.error)
                            }
                        >
                            Латинские буквы
                        </span>
                        <span
                            className={
                                style.numbers +
                                " " +
                                (isNumbers ? style.success : style.error)
                            }
                        >
                            Цифры от 1 до 9
                        </span>
                        <span
                            className={
                                style.length +
                                " " +
                                (isLength ? style.success : style.error)
                            }
                        >
                            От 8 символов
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
