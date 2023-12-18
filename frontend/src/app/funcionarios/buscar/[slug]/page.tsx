import React from "react";
import Header from "@/components/Header";

import Link from "next/link";
import ListFuncionariosByNome from "../../components/ListFuncionariosByNome";
import ButtonSearchFuncionario from "../../components/ButtonSearchFuncionario";
const BuscarFuncionarios = async ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <Header title={`Busca de funcionários ${params.slug}`}/>
            <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
            <b>Funcionários</b>
            <div>
                <ButtonSearchFuncionario  />
                <Link href="/cargos/adicionar">
                <button className="btn btn-neutral ml-2">Adicionar</button>
                </Link>
            </div> 
            </div>
            <ListFuncionariosByNome params={params} />
        </>
    );
}

export default BuscarFuncionarios;