'use client'

import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

interface IButtonSearchRelatorio {
  
}

const ButtonSearchRelatorio = (props: IButtonSearchRelatorio) => {
    const [modal, setModal] = useState(false);
    const [nomeCargoFuncionario, setNomeCargoFuncionario] = useState('');

    const router = useRouter();

    const handlerSearchFuncionario: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if(nomeCargoFuncionario == "" || nomeCargoFuncionario == " ") {
            return;
        }
        router.push(`/relatorios/buscar/${nomeCargoFuncionario.replace(RegExp(" "), "%20")}`);
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
                            placeholder="Digite cargo ou nome do funcionário"
                            value={nomeCargoFuncionario}
                            onChange={(e) => setNomeCargoFuncionario(e.target.value)}
                        />
                        <button type="submit" className="btn">Pesquisar</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default ButtonSearchRelatorio;