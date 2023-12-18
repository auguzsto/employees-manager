'use client'

import InputTextNumber from "@/components/InputTextNumber";
import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

interface IFormAddCargo {
    handler: string | ((formData: FormData) => void)
    cargo: ICargo;
}

const FormAddCargo = (props: IFormAddCargo) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [valueNome, setValueNome] = useState("");
    const [valueSalario, setValueSalario] = useState("");
    const [isDisable, setIsDisable] = useState(true)

    const router = useRouter();

    const closeModal = () => {
        setModalOpen(false);
        router.push('/cargos');
    }

    const handlersNome = (value: string) => {
        setValueNome(value);

        if(value.length > 1) {
            setValueSalario("0");
            return setIsDisable(false);
        }

        return setIsDisable(true);
    }

    const handlersSalario = (value: string) => {
        setValueSalario(value);

        if(value.length > 1) {
            return setIsDisable(false);
        }

        return setIsDisable(true);
    }

    return (
        <>
            <form action={props.handler}>
                <input
                    onChange={(e) => handlersNome(e.target.value)}
                    name="nome"
                    value={valueNome}
                    placeholder="Nome do cargo"
                    className="input input-bordered w-full"
                />
                <InputTextNumber
                    onChange={(e) => handlersSalario(e.target.value)}
                    id="salario"
                    value={valueSalario}
                    type="salario"
                    name="salario"
                    placeholder="Salário"
                    className="input input-bordered w-full"
                />
                <div className="mt-2">
                    <button
                        onClick={(e) => setModalOpen(true)}
                        disabled={isDisable}
                        className="btn btn-neutral w-full"
                        type="submit">Adicionar</button>
                </div>
            </form>

            <Modal title="Adicionado" open={modalOpen} close={() => closeModal()}> 
                Cargo adicionado com sucesso.
            </Modal>
            
        </>
    );
}

export default FormAddCargo;