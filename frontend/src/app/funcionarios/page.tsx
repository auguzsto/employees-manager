import Header from "@/components/Header";
import React from "react";
import ListFuncionarios from "./components/ListFuncionarios";

function FuncionariosPage() {
    return (
      <div>
        <Header/>
        <div className="p-1 text-2xl"><b>Funcionários</b></div>
        <ListFuncionarios/>
     </div>
    );
  }


export default FuncionariosPage;