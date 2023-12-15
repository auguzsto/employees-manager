'use client'

import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import React, { FormEventHandler, useState } from "react";
import { deleteCargo, deleteFuncionario } from "../../../../api";
import { useRouter } from "next/navigation";
import IFuncionario from "@/types/Funcionario";

interface IButtonDeleteFuncionario {
    funcionario: IFuncionario
}

const ButtonDeleteFuncionario = (props: IButtonDeleteFuncionario) => {
    const [modal, setModal] = useState(false);
    const [nomeFuncionario, setNomeFuncionario] = useState('');

    const router = useRouter();

    const handlerDeleteFuncionario: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if(nomeFuncionario != props.funcionario.nome) {
           let error = document.getElementById('error');
           return error!.innerHTML = "Nome inválido."
        }
        await deleteFuncionario(props.funcionario.id!);
        setModal(false)
        router.push("/funcionarios");
    }

    const handlerModalOpen = () => {
        setModal(true)
    }
    return (
        <>
            <button
                className="btn btn-neutral"
                onClick={handlerModalOpen}
            >
                Deletar
            </button>

            <Modal open={modal} close={() => setModal(false)} title="Deletar">
                <div id="error" className="modal-open"></div>
                <form onSubmit={handlerDeleteFuncionario}>
                    <div className="modal-action">
                        <input
                            className="input input-bordered w-full"
                            name="nome"
                            placeholder="Confirme digitando o nome do funcionário"
                            value={nomeFuncionario}
                            onChange={(e) => setNomeFuncionario(e.target.value)}
                        />
                        <button type="submit" className="btn btn-error">Deletar</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default ButtonDeleteFuncionario;