'use client'

import InputText from "@/components/InputText";
import InputTextNumber from "@/components/InputTextNumber";
import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import React, { useState } from "react";

interface IFormUpdateCargo {
    handler: string | ((formData: FormData) => void)
    cargo: ICargo;
}

const FormUpdateCargo = (props: IFormUpdateCargo) => {
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
                <button
                    onClick={() => setModalOpen(true)}
                    className="btn btn-neutral"
                    type="submit">Atualizar</button>
            </form>

            <Modal
                title="Atualização realizada"
                message="Atualização nos atributos do cargo foram atualizadas com sucesso."
                open={modalOpen}
                close={() => setModalOpen(false)}
            />
        </>
    );
}

export default FormUpdateCargo;