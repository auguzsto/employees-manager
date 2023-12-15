import Header from "@/components/Header";
import { getAllCargos, getFuncionarioById, updateFuncionario } from "../../../../api";
import InputTextNumber from "@/components/InputTextNumber";
import IFuncionario from "@/types/Funcionario";
import InputText from "@/components/InputText";


const DetailFuncionario = async ({ params }: { params: { slug: string } }) => {
    const funcionarios = await getFuncionarioById(Number.parseInt(params.slug));
    let funcionario = funcionarios[0];
    const cargos = await getAllCargos();

    const handlerSubmitUpdateFuncionario = async (fromData: FormData) => {
        'use server'
        const rawFormData = {
            nome: fromData.get('nome'),
            data_nascimento: fromData.get('data_nascimento'),
            cpf: fromData.get('cpf'),
            email: fromData.get('email'),
            telefone: fromData.get('telefone'),
        }
        await updateFuncionario(rawFormData as IFuncionario, Number.parseInt(params.slug));
    }

    return (
        <>
            <Header title="Funcionarios"/>
            <div className="mt-5">
               <p className="text-4xl font-bold">{funcionario.nome}</p>
               <form action={handlerSubmitUpdateFuncionario}>
                <InputText
                    value={funcionario.nome}
                    name="nome"
                    placeholder="Nome do funcionário"
                />
                <InputText 
                    type="date"
                    value={funcionario.data_nascimento}
                    name="data_nascimento"
                    placeholder="Data de nascimento"/>
                <InputTextNumber
                    value={funcionario.cpf}
                    type="cpf"
                    name="cpf"
                    placeholder="CPF"
                />
                <InputText
                    value={funcionario.email}
                    name="email"
                    placeholder="Email"/>
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
                    type="submit">Atualizar</button>
            </form>
            </div>
            
        </>
        
    );
}

export default DetailFuncionario;