import { getCargoById, getFuncionarioByNome, getRelatorioByNomeCargo } from "../../../../api";

const ListRelatoriosByNomeCargo = async ({ params }: { params: { slug: string } }) => {
    const relatorios = await getRelatorioByNomeCargo(params.slug);

    return (
        <div>
          <table className="table-auto w-full shadow-md mt-5 rounded border-separate border-spacing-y-3">
            <thead className="text-left tracking-wider">
                <tr>
                <th className="p-4">Nome do funcionário</th>
                <th className="p-4">Telefone</th>
                <th className="p-4">Cargo</th>
                <th className="p-4">Salario</th>
                </tr>
            </thead>
            <tbody className="">
                {relatorios.map(relatorios => (
                    <tr key={relatorios.funcionario_id} className="bg-card rounded">
                    <td className="p-4"><a href={`/funcionarios/${relatorios.funcionario_id}`}>{relatorios.nome_funcionario}</a></td>
                    <td className="p-4">{relatorios.telefone}</td>
                    <td className="p-4"><a href={`/cargos/${relatorios.cargo_id}`}>{relatorios.nome_cargo}</a></td>
                    <td className="p-4">{relatorios.salario}</td>

                </tr>
                ))}
                
            </tbody>
            </table>  
        </div>
    );
}

export default ListRelatoriosByNomeCargo;