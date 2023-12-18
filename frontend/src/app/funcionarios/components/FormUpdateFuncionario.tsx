'use client'

import InputTextNumber from "@/components/InputTextNumber";
import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import IFuncionario from "@/types/Funcionario";
import React, { useState } from "react";
import { validate } from 'gerador-validador-cpf'
import { hasAlreadyCpf } from "../../../../api";
import { useRouter } from "next/navigation";
import InputText from "@/components/InputText";

interface IFormUpdateFuncionario {
    handler: string | ((formData: FormData) => void)
    funcionario: IFuncionario;
    cargos: ICargo[];
}

const FormUpdateFuncionario = (props: IFormUpdateFuncionario) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [successCpf, setSuccessCpf] = useState('');
    const [isDisableButton, setIsDisableButton] = useState(false);
    const [cargoId, setCargoId] = useState(props.funcionario.cargo_id.toString());

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
                <InputText
                    type="text" 
                    name="nome"
                    value={props.funcionario.nome}
                    placeholder="Nome do funcionário"
                />
                <InputText
                    type="date" 
                    name="data_nascimento"
                    value={props.funcionario.data_nascimento}
                    placeholder="Data de nascimento"
                    />
                <InputTextNumber
                    className={successCpf}
                    id="cpf"
                    type="cpf"
                    name="cpf"
                    value={props.funcionario.cpf}
                    placeholder="CPF"
                    onChange={(e) => {validateCPF(e.target.value)}}
                />
                <InputText
                    type="text" 
                    name="endereco_completo"
                    placeholder="Endereço completo"
                    value={props.funcionario.endereco_completo}
                    />
                <InputText
                    type="text" 
                    name="email"
                    value={props.funcionario.email}
                    placeholder="Email"
                    />
                 <InputTextNumber
                    type="telefone"
                    name="telefone"
                    value={props.funcionario.telefone}
                    placeholder="Telefone"
                />
                <select 
                    required
                    name="cargo_id"
                    onChange={(e) => setCargoId(e.target.value)}
                    value={cargoId}
                    className="select select-bordered w-full mt-2">
                    {props.cargos.map((cargo) => (
                        <option key={cargo.id} value={cargo.id}>{cargo.nome}</option>
                    ))}
                </select>
                <button
                    onClick={(e) => setModalOpen(true)}
                    className="btn btn-neutral w-full mt-2" 
                    disabled={isDisableButton}
                    type="submit">Atualizar</button>
            </form>

            <Modal title="Atualizado" open={modalOpen} close={() => closeModal()}> 
                Funcionário atualizado com sucesso.
            </Modal>
            
        </>
    );
}

export default FormUpdateFuncionario;