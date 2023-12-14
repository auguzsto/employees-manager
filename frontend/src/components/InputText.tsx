'use client'

import { InputMask } from "@react-input/mask";

interface IInputText {
    name: string,
    placeholder: string,
    mask?: string
}

const InputText = (props: IInputText) => {
    return(
        <InputMask
            required
            mask={props.mask}
            type="text"
            name={props.name}
            placeholder={props.placeholder}
            className="input input-bordered w-full max-w-xs"
   
        />
    );
}

export default InputText;