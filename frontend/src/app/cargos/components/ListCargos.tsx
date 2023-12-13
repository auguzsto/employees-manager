async function _getData() {
    const res = await fetch("http://localhost:8000/api/cargos", {
        cache: 'no-store'
    });
    if(!res.ok) {
        throw new Error("Falha ao realizar requisição");
    }

    return res.json();

}

const ListCargos = async () => {
    const cargos = await _getData();

    return (
        <div>
          <table className="table-auto w-full shadow-md mt-5 rounded border-separate border-spacing-y-3">
            <thead className="text-left tracking-wider">
                <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Nome</th>
                <th className="p-4">Salário</th>
                <th className="p-4">Criado em</th>
                <th className="p-4">Atualizado em</th>
                <th className="p-4">Deletado em</th>
                </tr>
            </thead>
            <tbody className="">
                {cargos.map(cargo => (
                    <tr key={cargo.id} className="bg-card rounded">
                    <td className="p-4">{cargo.id}</td>
                    <td className="p-4">{cargo.nome}</td>
                    <td className="p-4">{cargo.salario}</td>
                    <td className="p-4">{cargo.created_at}</td>
                    <td className="p-4">{cargo.updated_at}</td>
                    <td className="p-4">{cargo.deleted_at}</td>
                </tr>
                ))}
                
            </tbody>
            </table>  
        </div>
    );
}

export default ListCargos;