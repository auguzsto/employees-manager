'use client'

import React, { useState } from "react";

interface IModal {
    open: boolean,
    close: any,
    title: string,
    children: any
    
}

const Modal: React.FC<IModal> = (props: IModal) => {
    return (
       <>
        <dialog id="my_modal_3" className={`modal ${props.open ? "modal-open" : ""}`}>
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={props.close}>✕</button>
            </form>
            <h3 className="font-bold text-lg">{props.title}</h3>
            <p className="py-4">{props.children}</p>
        </div>
        </dialog>
       </>
    );
}

export default Modal;