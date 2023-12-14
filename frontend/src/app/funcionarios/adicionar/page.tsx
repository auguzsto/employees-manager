import Header from "@/components/Header";
import React from "react";
import { addFuncionario, getAllCargos} from "../../../../api";
import IFuncionario from "@/types/Funcionario";
import InputText from "@/components/InputText";
import InputTextNumber from "@/components/InputTextNumber";
import { PatternFormat } from "react-number-format";


const AddFuncionario = async () => {
    const handleSubmitNewFuncionario = async (formData: FormData) => {
        'use server';
        const rawFormData = {
            nome: formData.get('nome'),
            data_nascimento: formData.get('data_nascimento'),
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
            <Header/>
            <div className="p-1 text-2xl"><b>Adicionar funcionário</b></div>
            <form action={handleSubmitNewFuncionario}>
                <input
                    required
                    type="text" 
                    name="nome"
                    placeholder="Nome do funcionário" 
                    className="input input-bordered w-full max-w-xs"
                />
                <input 
                    type="date" 
                    name="data_nascimento"
                    placeholder="Data de nascimento" 
                    className="input input-bordered w-full max-w-xs"/>
                <InputTextNumber
                    type="cpf"
                    name="cpf"
                    placeholder="CPF"
                />
                <input 
                    type="text" 
                    name="email"
                    placeholder="Email" 
                    className="input input-bordered w-full max-w-xs"/>
                 <InputTextNumber
                    type="telefone"
                    name="telefone"
                    placeholder="Telefone"
                />
                <select 
                    required
                    name="cargo_id"
                    className="select select-bordered w-full max-w-xs">
                    {cargos.map((cargo) => (
                        <option key={cargo.id} value={cargo.id}>{cargo.nome}</option>
                    ))}
                </select>
                <button
                    className="btn btn-neutral"
                    type="submit">Adicionar</button>
            </form>
        </div>
    );
}

export default AddFuncionario;