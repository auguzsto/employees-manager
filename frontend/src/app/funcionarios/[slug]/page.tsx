import Header from "@/components/Header";
import { getAllCargos, getCargoById, getFuncionarioById } from "../../../../api";
import InputTextNumber from "@/components/InputTextNumber";


const DetailFuncionario = async ({ params }: { params: { slug: string } }) => {
    const funcionarios = await getFuncionarioById(Number.parseInt(params.slug));
    const funcionario = funcionarios[0];
    const cargos = await getAllCargos();

    return (
        <>
            <Header/>
            <div className="mt-5">
               <p className="text-4xl font-bold">{funcionario.nome}</p>
               <form>
                <input
                    required
                    type="text"
                    value={funcionario.nome}
                    name="nome"
                    placeholder="Nome do funcionário" 
                    className="input input-bordered w-full max-w-xs"
                />
                <input 
                    type="date"
                    value={funcionario.data_nascimento}
                    name="data_nascimento"
                    placeholder="Data de nascimento" 
                    className="input input-bordered w-full max-w-xs"/>
                <InputTextNumber
                    value={funcionario.cpf}
                    type="cpf"
                    name="cpf"
                    placeholder="CPF"
                />
                <input
                    value={funcionario.email}
                    type="text" 
                    name="email"
                    placeholder="Email" 
                    className="input input-bordered w-full max-w-xs"/>
                 <InputTextNumber
                    value={funcionario.telefone}
                    type="telefone"
                    name="telefone"
                    placeholder="Telefone"
                />
                <select 
                    required
                    name="cargo_id"
                    className="select select-bordered w-full max-w-xs">
                    {cargos.map((cargo) => (
                        <option key={cargo.id} value={funcionario.cargo_id}>{cargo.nome}</option>
                    ))}
                </select>
                <button
                    className="btn btn-neutral"
                    type="submit">Adicionar</button>
            </form>
            </div>
            
        </>
        
    );
}

export default DetailFuncionario;