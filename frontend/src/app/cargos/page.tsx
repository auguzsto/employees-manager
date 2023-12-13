import Header from "@/components/Header";
import React from "react";
import ListCargos from "./components/ListCargos";

function CargosPage() {
    return (
        <div>
          <Header/>
          <div className="p-1 text-2xl"><b>Cargos</b></div>
          <ListCargos />
       </div>
      );
  }


export default CargosPage;