import Header from "@/components/Header";
import React from "react";
import { addCargo } from "../../../../api";
import ICargo from "@/types/Cargo";
import FormAddCargo from "../components/FormAddCargo";


const AddCargo = () => {
    const cargo = {
        nome: ""
    } as ICargo;
    
    const handlerSubmitNewCargo = async (formData: FormData) => {
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
            <Header title="Cargos"/>
            <div className="p-1 text-2xl"><b>Adicionar cargo</b></div>
            
            <FormAddCargo 
                cargo={cargo}
                handler={handlerSubmitNewCargo}
            />
        </div>
    );
}

export default AddCargo;