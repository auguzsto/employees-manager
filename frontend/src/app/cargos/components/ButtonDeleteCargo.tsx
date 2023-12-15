'use client'

import Modal from "@/components/Modal";
import ICargo from "@/types/Cargo";
import React, { FormEventHandler, useState } from "react";
import { deleteCargo } from "../../../../api";
import { useRouter } from "next/navigation";

interface IButtonDeleteCargo {
    cargo: ICargo
}

const ButtonDeleteCargo = (props: IButtonDeleteCargo) => {
    const [modal, setModal] = useState(false);
    const [nomeCargo, setNomeCargo] = useState('');

    const router = useRouter();

    const handlerDeleteCargo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        if(nomeCargo != props.cargo.nome) {
           let error = document.getElementById('error');
           return error!.innerHTML = "Nome inválido."
        }
        await deleteCargo(props.cargo.id!);
        setModal(false)
        router.push("/cargos");
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
                <form onSubmit={handlerDeleteCargo}>
                    <div className="modal-action">
                        <input
                            className="input input-bordered w-full"
                            name="nome"
                            placeholder="Confirme digitando o nome do cargo"
                            value={nomeCargo}
                            onChange={(e) => setNomeCargo(e.target.value)}
                        />
                        <button type="submit" className="btn btn-error">Deletar</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default ButtonDeleteCargo;