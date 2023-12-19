'use client'

import Modal from "@/components/Modal";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

interface IButtonSearchFuncionario {
  
}

const ButtonSearchFuncionario = (props: IButtonSearchFuncionario) => {
    const [modal, setModal] = useState(false);
    const [nomeFuncionario, setNomeFuncionario] = useState('');

    const router = useRouter();

    const handlerSearchFuncionario: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if(nomeFuncionario == "" || nomeFuncionario == " ") {
            return;
        }
        router.push(`/funcionarios/buscar/${nomeFuncionario.replace(RegExp(" "), "_")}`)
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
                Pesquisar
            </button>

            <Modal open={modal} close={() => setModal(false)} title="Pesquisar">
                <div id="error" className="modal-open"></div>
                <form onSubmit={handlerSearchFuncionario}>
                    <div className="modal-action">
                        <input
                            required
                            className="input input-bordered w-full"
                            name="nome"
                            placeholder="Confirme digitando o nome do funcionário"
                            value={nomeFuncionario}
                            onChange={(e) => setNomeFuncionario(e.target.value)}
                        />
                        <button type="submit" className="btn">Pesquisar</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default ButtonSearchFuncionario;