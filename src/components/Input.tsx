import React from 'react'

type Props = {
    name: string;
    placeholder: string;
    type: string
}

const Input: React.FC<Props> = ({ name = 'name', placeholder = "placeholder", type = "text" }) => {
    return (
        <input type={type} name={name} placeholder={placeholder} />
    )
}

export default Input;