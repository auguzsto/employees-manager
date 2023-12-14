import Header from "@/components/Header";
import React, { FormEventHandler, useState } from "react";
import { addCargo } from "../../../../api";
import ICargo from "@/types/Cargo";
import { InputMask } from '@react-input/mask';
import InputText from "@/components/InputText";
import InputTextNumber from "@/components/InputTextNumber";


const AddCargo = () => {
    const handleSubmitNewCargo = async (formData: FormData) => {
        'use server'
        const rawFormData = {
            nome: formData.get('nome'),
            salario: formData.get('salario'),
        };
        const newCargo = rawFormData as ICargo;
        await addCargo(newCargo);
    }

    return (
        <div>
            <Header/>
            <div className="p-1 text-2xl"><b>Adicionar cargo</b></div>
            <form action={handleSubmitNewCargo}>
                <input type="text" 
                    name="nome"
                    placeholder="Nome do cargo" 
                    className="input input-bordered w-full max-w-xs"
                />
                <InputTextNumber
                    type="salario"
                    name="salario"
                    placeholder="Salário"
                />
                <button
                    className="btn btn-neutral"
                    type="submit">Adicionar</button>
            </form>
        </div>
    );
}

export default AddCargo;