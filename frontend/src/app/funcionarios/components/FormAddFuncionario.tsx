'use client'

import InputTextNumber from "@/components/InputTextNumber";
import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import IFuncionario from "@/types/Funcionario";
import React, { useState } from "react";
import { validate } from 'gerador-validador-cpf'
import { hasAlreadyCpf } from "../../../../api";
import { useRouter } from "next/navigation";

interface IFormAddFuncionario {
    handler: string | ((formData: FormData) => void)
    funcionario: IFuncionario;
    cargos: ICargo[];
}

const FormAddFuncionario = (props: IFormAddFuncionario) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [successCpf, setSuccessCpf] = useState('');
    const [isDisableButton, setIsDisableButton] = useState(true);

    const router = useRouter();

    const closeModal = () => {
        setModalOpen(false);
        router.push('/funcionarios');
    }

    const validateCPF = async (cpf: string) => {
        if(cpf == "") {
            setSuccessCpf('input-error');
            return setIsDisableButton(true);
        }

        if(!validate(cpf)) {
            return setSuccessCpf('input-error'); 
        }

        if(await hasAlreadyCpf(cpf)) {
            return setSuccessCpf('input-error');
        }

        setIsDisableButton(false);
        return setSuccessCpf('input-accent');
    }

    return (
        <>
            <form action={props.handler}>
                <input
                    required
                    type="text" 
                    name="nome"
                    placeholder="Nome do funcionário" 
                    className="input input-bordered w-full mt-2"
                />
                <input
                    required
                    type="date" 
                    name="data_nascimento"
                    placeholder="Data de nascimento" 
                    className="input input-bordered w-full mt-2"/>
                <InputTextNumber
                    className={successCpf}
                    id="cpf"
                    type="cpf"
                    name="cpf"
                    placeholder="CPF"
                    onChange={(e) => {validateCPF(e.target.value)}}
                />
                <input
                    required
                    type="text" 
                    name="endereco_completo"
                    placeholder="Endereço completo" 
                    className="input input-bordered w-full mt-2"/>
                <input
                    required
                    type="text" 
                    name="email"
                    placeholder="Email" 
                    className="input input-bordered w-full mt-2"/>
                 <InputTextNumber
                    type="telefone"
                    name="telefone"
                    placeholder="Telefone"
                />
                <select 
                    required
                    name="cargo_id"
                    className="select select-bordered w-full mt-2">
                    {props.cargos.map((cargo) => (
                        <option key={cargo.id} value={cargo.id}>{cargo.nome}</option>
                    ))}
                </select>
                <button
                    onClick={(e) => setModalOpen(true)}
                    className="btn btn-neutral w-full mt-2" 
                    disabled={isDisableButton}
                    type="submit">Adicionar</button>
            </form>

            <Modal title="Adicionado" open={modalOpen} close={() => closeModal()}> 
                Funcionário adicionado com sucesso.
            </Modal>
            
        </>
    );
}

export default FormAddFuncionario;