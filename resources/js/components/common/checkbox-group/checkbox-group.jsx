import style from "./style.module.scss";
import { CheckboxGroup } from "@alfalab/core-components/checkbox-group";
import { Checkbox } from "@alfalab/core-components/checkbox";
import { useState } from "react";
import { useEffect } from "react";

export default function ({ fields, defaultField, className }) {
    const nameList = {};

    fields.forEach(({ name }) => (nameList[name] = false));

    const [value, setValue] = useState(nameList);
    const [currentName, setCurrentName] = useState(
        defaultField ? defaultField : ""
    );

    const onChange = (_, payload) => {
        setCurrentName(payload.name),
            setValue({ ...value, [payload.name]: payload.checked });
    };

    useEffect(() => {
        if (currentName === "all") {
            const _value = { ...nameList };
            _value.all = true;
            setValue({ ...value, ..._value });
        } else {
            setValue({ ...value, all: false });
        }
    }, [currentName]);

    return (
        <div className={[style.wrapper, className].join(" ")}>
            <CheckboxGroup onChange={onChange}>
                {fields.map(({ label, name }) => (
                    <Checkbox
                        label={label}
                        name={name}
                        checked={value[name]}
                        key={name}
                    />
                ))}
            </CheckboxGroup>
        </div>
    );
}
