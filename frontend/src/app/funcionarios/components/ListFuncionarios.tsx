async function _getData() {
    const res = await fetch("http://localhost:8000/api/funcionarios", {
        cache: 'no-store'
    });
    if(!res.ok) {
        throw new Error("Falha ao realizar requisição");
    }

    return res.json();

}

const ListFuncionarios = async () => {
    const funcionarios = await _getData();

    return (
        <div>
          <table className="table-auto w-full shadow-md mt-5 rounded border-separate border-spacing-y-3">
            <thead className="text-left tracking-wider">
                <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Nome</th>
                <th className="p-4">Nascimento</th>
                <th className="p-4">CPF</th>
                <th className="p-4">E-mail</th>
                <th className="p-4">Telefone</th>
                <th className="p-4">Cargo</th>
                </tr>
            </thead>
            <tbody className="">
                {funcionarios.map(funcionario => (
                    <tr key={funcionario.id} className="bg-card rounded">
                    <td className="p-4">{funcionario.id}</td>
                    <td className="p-4">{funcionario.nome}</td>
                    <td className="p-4">{funcionario.data_nascimento}</td>
                    <td className="p-4">{funcionario.cof}</td>
                    <td className="p-4">{funcionario.email}</td>
                    <td className="p-4">{funcionario.telefone}</td>
                    <td className="p-4">{funcionario.cargo_id}</td>
                </tr>
                ))}
                
            </tbody>
            </table>  
        </div>
    );
}

export default ListFuncionarios;