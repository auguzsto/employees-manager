import Link from "next/link";
import { getAllCargos } from "../../../../api";

const ListCargos = async () => {
    const cargos = await getAllCargos();

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
                </tr>
            </thead>
            <tbody className="">
                {cargos.map(cargo => (
                    <tr key={cargo.id} className="bg-card rounded">
                    <td className="p-4">{cargo.id}</td>
                    <td className="p-4"><a href={`/cargos/${cargo.id}`}>{cargo.nome}</a></td>
                    <td className="p-4">{cargo.salario}</td>
                    <td className="p-4">{cargo.created_at}</td>
                    <td className="p-4">{cargo.updated_at}</td>
                    </tr>
                ))}
                
            </tbody>
            </table>  
        </div>
    );
}

export default ListCargos;