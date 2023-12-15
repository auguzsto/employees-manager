import React from "react";
import { getCargoByNome } from "../../../../../api";
import Header from "@/components/Header";
import ButtonSearchCargo from "../../components/ButtonSearchCargo";
import Link from "next/link";
import ListCargosByNome from "../../components/ListCargosByNome";

const BuscarCargos = async ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <Header title={`Busca de cargo ${params.slug}`}/>
            <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
            <b>Cargos</b>
            <div>
                <ButtonSearchCargo  />
                <Link href="/cargos/adicionar">
                <button className="btn btn-neutral ml-2">Adicionar</button>
                </Link>
            </div> 
            </div>
            <ListCargosByNome params={params} />
        </>
    );
}

export default BuscarCargos