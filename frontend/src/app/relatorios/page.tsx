import Header from "@/components/Header";
import React from "react";
import Link from "next/link";
import ButtonSearchRelatorio from "./components/ButtonSearchRelatorio";
import ListRelatorios from "./components/ListRelatorios";

function RelatoriosPage() {
    return (
      <div>
        <Header title="Relatório"/>
        <div className="p-1 mt-1 text-2xl flex items-start justify-between w-full">
            <div>
              <b>Relatório</b>
              <p className="text-sm font-bold">Para detalhes clique no nome do funcionário ou cargo</p>
            </div>
            <div>
            <ButtonSearchRelatorio/>
          </div> 
          </div>
        <ListRelatorios/>
     </div>
    );
  }


export default RelatoriosPage;