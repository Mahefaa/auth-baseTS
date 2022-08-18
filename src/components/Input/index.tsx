import React from "react";

const Input: React.FC<{
    className: string,
    id: string,
    label?: string,
    value?: string,
    type: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean,
    onClick?: React.MouseEventHandler<HTMLInputElement>
}>
    = (props) => {
    const {className, disabled, id, label, onChange, type, onClick, value} = props;
    return (
        <span className={className}>
            <label htmlFor={id} className={"label"}>{label}</label>
            <input
                value={value}
                type={type}
                id={id}
                placeholder={" "}
                onChange={onChange}
                onClick={onClick}
                disabled={disabled}
            />
        </span>
    );
}
export default Input;