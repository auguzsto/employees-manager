import Header from "@/components/Header";
import React from "react";
import { addFuncionario, getAllCargos} from "../../../../api";
import IFuncionario from "@/types/Funcionario";
import FormAddFuncionario from "../components/FormAddFuncionario";


const AddFuncionario = async () => {
    const funcionario = {
        nome: '',
        data_nascimento: '',
        endereco_completo: '',
        cpf: '',
        email: '',
        telefone: '',
        cargo_id: 0
    } as IFuncionario;

    const handleSubmitNewFuncionario = async (formData: FormData) => {
        'use server';
        const rawFormData = {
            nome: formData.get('nome'),
            data_nascimento: formData.get('data_nascimento'),
            endereco_completo: formData.get('endereco_completo'),
            cpf: formData.get('cpf'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            cargo_id: formData.get("cargo_id")?.valueOf(),
        };
        const newFuncionario = rawFormData as IFuncionario;
        await addFuncionario(newFuncionario);
    }

    const cargos = await getAllCargos();

    return (
        <div>
            <Header title="Funcionarios"/>
            <div className="p-1 text-2xl"><b>Adicionar funcionário</b></div>
            <FormAddFuncionario 
                cargos={cargos}
                funcionario={funcionario}
                handler={handleSubmitNewFuncionario}
            />
        </div>
    );
}

export default AddFuncionario;