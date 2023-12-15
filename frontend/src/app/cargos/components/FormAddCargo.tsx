'use client'

import InputText from "@/components/InputText";
import InputTextNumber from "@/components/InputTextNumber";
import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import React, { useState } from "react";

interface IFormAddCargo {
    handler: string | ((formData: FormData) => void)
    cargo: ICargo;
}

const FormAddCargo = (props: IFormAddCargo) => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <form action={props.handler}>
                <InputText
                    name="nome"
                    value={props.cargo.nome}
                    placeholder="Nome do cargo"
                />
                <InputTextNumber
                    value={props.cargo.salario}
                    type="salario"
                    name="salario"
                    placeholder="Salário"
                />
                <div className="mt-2">
                    <button
                        onClick={() => setModalOpen(true)}
                        className="btn btn-neutral w-full"
                        type="submit">Adicionar</button>
                </div>
            </form>

            <Modal title="Atualização realizada" open={modalOpen} close={() => setModalOpen(false)}> 
                Atualização nos atributos do cargo foram atualizadas com sucesso.
            </Modal>
            
        </>
    );
}

export default FormAddCargo;