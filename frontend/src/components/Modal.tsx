'use client'

import React, { useState } from "react";

interface IModal {
    open: boolean,
    close: any,
    title: string,
    message: string
    
}

const Modal: React.FC<IModal> = (props: IModal) => {
    const [open, setOpen] = useState(false);
    return (
       <>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className={`modal ${props.open ? "modal-open" : ""}`} role="dialog">
        <div className="modal-box">
            <h3 className="font-bold text-2xl">{props.title}</h3>
            <p className="py-4">{props.message}</p>
            <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn" onClick={props.close}>Fechar</label>
            </div>
        </div>
        </div>
       </>
    );
}

export default Modal;