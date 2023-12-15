import Header from "@/components/Header";
import React from "react";
import ListFuncionarios from "./components/ListFuncionarios";

function FuncionariosPage() {
    return (
      <div>
        <Header title="Funcionarios"/>
        <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
            <b>Funcionários</b>
            <a href="/funcionarios/adicionar">
              <button className="btn btn-neutral">Adicionar</button>
            </a>
          </div>
        <ListFuncionarios/>
     </div>
    );
  }


export default FuncionariosPage;