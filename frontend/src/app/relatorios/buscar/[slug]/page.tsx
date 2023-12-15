import React from "react";
import Header from "@/components/Header";

import Link from "next/link";
import ListRelatoriosByNomeCargo from "../../components/ListRelatoriosByNomeCargo";
import ButtonSearchRelatorio from "../../components/ButtonSearchRelatorio";
const BuscarFuncionarios = async ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <Header title={`Busca de cargo ${params.slug}`}/>
            <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
            <b>Relatórios</b>
            <div>
                <ButtonSearchRelatorio  />
            </div> 
            </div>
            <ListRelatoriosByNomeCargo params={params} />
        </>
    );
}

export default BuscarFuncionarios;