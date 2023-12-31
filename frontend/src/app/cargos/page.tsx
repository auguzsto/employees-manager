import Header from "@/components/Header";
import React from "react";
import ListCargos from "./components/ListCargos";
import Link from 'next/link'
import ButtonSearchCargo from "./components/ButtonSearchCargo";

const CargosPage = () => {

  return (
      <div>
        <Header title="Cargos"/>
        <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
          <div>
            <b>Cargos</b>
            <p className="text-sm font-bold">Para detalhes clique no nome do cargo</p>
          </div>
          <div>
            <ButtonSearchCargo  />
            <Link href="/cargos/adicionar">
              <button className="btn btn-neutral ml-2">Adicionar</button>
            </Link>
          </div> 
        </div>
        <ListCargos />
      </div>
    );
  }


export default CargosPage;