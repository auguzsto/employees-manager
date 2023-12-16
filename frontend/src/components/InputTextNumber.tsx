'use client'

import { ChangeEventHandler } from 'react';
import { NumericFormat, PatternFormat } from 'react-number-format';

interface IInpuTextNumber {
    id?: string,
    type: string,
    name: string,
    value?: string | number,
    placeholder: string,
    className?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const InputTextNumber = (props: IInpuTextNumber) => {
    switch(props.type) {
        case "salario":
            return (
                <div className='mt-2'>
                    <NumericFormat
                    id={props.id}
                    required
                    onChange={props.onChange}
                    className={`input input-bordered w-full ${props.className}`}
                    type="text"
                    value={props.value}
                    name={props.name}
                    placeholder={props.placeholder}
                    allowLeadingZeros
                    decimalScale={3}
                    thousandSeparator=","
                    prefix={'R$'} 
                />
                </div>
            );

        case "cpf":
            return (
                <div className='mt-2'>
                    <PatternFormat
                    required
                    className={`input input-bordered w-full ${props.className}`}
                    format='###.###.###-##'
                    value={props.value}
                    onChange={props.onChange}
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder} 
                />
                </div>
            )
        case "telefone":
            return (
                <div className='mt-2'>
                    <PatternFormat
                    className='input input-bordered w-full'
                    format='(##) # ####-####'
                    type="text"
                    value={props.value}
                    name={props.name}
                    placeholder={props.placeholder} 
                />
                </div>
            )

    }
}

export default InputTextNumber;