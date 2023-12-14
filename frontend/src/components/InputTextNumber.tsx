'use client'

import { NumericFormat, PatternFormat } from 'react-number-format';

interface IInpuTextNumber {
    type: string,
    name: string,
    placeholder: string,
}

const InputTextNumber = (props: IInpuTextNumber) => {
    switch(props.type) {
        case "salario":
            return (
                <NumericFormat
                    required
                    className='input input-bordered w-full max-w-xs'
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder}
                    allowLeadingZeros
                    decimalScale={3}
                    thousandSeparator=","
                    prefix={'R$'} 
                />
            );

        case "cpf":
            return (
                <PatternFormat
                    required
                    className='input input-bordered w-full max-w-xs'
                    format='###.###.###-##'
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder} 
                />
            )
        case "telefone":
            return (
                <PatternFormat
                    className='input input-bordered w-full max-w-xs'
                    format='(##) # ####-####'
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder} 
                />
            )

    }
}

export default InputTextNumber;