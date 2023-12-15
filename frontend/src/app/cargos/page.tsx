import Header from "@/components/Header";
import React from "react";
import ListCargos from "./components/ListCargos";
import Link from 'next/link'
import InputText from "@/components/InputText";

function CargosPage() {

    return (
        <div>
          <Header title="Cargos"/>
          <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
            <b>Cargos</b>
            <InputText 
              name="nome"
              placeholder="Procure pelo nome do cargo"
              value=""
            />
            <Link href="/cargos/adicionar">
              <button className="btn btn-neutral">Adicionar</button>
            </Link>
          </div>
          <ListCargos />
       </div>
      );
  }


export default CargosPage;