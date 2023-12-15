import Header from "@/components/Header";
import React from "react";
import ListFuncionarios from "./components/ListFuncionarios";
import ButtonSearchFuncionario from "./components/ButtonSearchFuncionario";
import Link from "next/link";

function FuncionariosPage() {
    return (
      <div>
        <Header title="Funcionarios"/>
        <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
            <b>Funcionários</b>
            <div>
            <ButtonSearchFuncionario />
            <Link href="/funcionarios/adicionar">
              <button className="btn btn-neutral ml-2">Adicionar</button>
            </Link>
          </div> 
          </div>
        <ListFuncionarios/>
     </div>
    );
  }


export default FuncionariosPage;