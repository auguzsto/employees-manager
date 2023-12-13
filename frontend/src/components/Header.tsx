import React from "react"

const Header = () => {
    return (
        <header>
            <p className="font-bold text-3xl mb-5">Gerenciamento</p>
            <div className="border rounded-md p-5 w-auto">
                <a href="/" className="mr-5">Início</a>
                <a href="/cargos" className="mr-5">Cargos</a>
                <a href="/funcionarios" className="mr-5">Funcionários</a>
            </div>
        </header>
    );
}

export default Header;