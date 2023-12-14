'use client'

import Header from "@/components/Header";
import React from "react";
import ListCargos from "./components/ListCargos";
import Link from 'next/link'

function CargosPage() {

    return (
        <div>
          <Header/>
          <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
            <b>Cargos</b>
            <Link href="/cargos/adicionar">
              <button className="btn btn-neutral">Adicionar</button>
            </Link>
          </div>
          <ListCargos />
       </div>
      );
  }


export default CargosPage;