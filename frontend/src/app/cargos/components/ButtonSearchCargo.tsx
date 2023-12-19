'use client'

import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

interface IButtonSearchCargo {
  
}

const ButtonSearchCargo = (props: IButtonSearchCargo) => {
    const [modal, setModal] = useState(false);
    const [nomeCargo, setNomeCargo] = useState('');

    const router = useRouter();

    const handlerSearchCargo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if(nomeCargo == "" || nomeCargo == " ") {
            return;
        }
        router.push(`/cargos/buscar/${nomeCargo.replace(RegExp(" "), "_")}`);
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
                <form onSubmit={handlerSearchCargo}>
                    <div className="modal-action">
                        <input
                            required
                            className="input input-bordered w-full"
                            name="nome"
                            placeholder="Confirme digitando o nome do cargo"
                            value={nomeCargo}
                            onChange={(e) => setNomeCargo(e.target.value)}
                        />
                        <button type="submit" className="btn">Pesquisar</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default ButtonSearchCargo;