'use client'

import { ChangeEventHandler, useState } from "react";

interface IInputText {
    name: string,
    type?: string,
    placeholder: string,
    value?: string | number,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputText = (props: IInputText) => {
    const [value, setValue] = useState(`${props.value}`)
    
    const handlerOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
    
    return(
        <div className="mt-2">
            <input
            required
            type={props.type == null ? "text" : props.type}
            name={props.name}
            value={value}
            onChange={handlerOnChange}
            placeholder={props.placeholder}
            className="input input-bordered w-full"
   
        />
        </div>
    );
}

export default InputText;