import Header from "@/components/Header";
import { getAllCargos, getFuncionarioById, updateFuncionario } from "../../../../api";
import InputTextNumber from "@/components/InputTextNumber";
import IFuncionario from "@/types/Funcionario";
import InputText from "@/components/InputText";
import ButtonDeleteFuncionario from "../components/ButtonDeleteFuncionario";


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
            <div className="p-1 mt-1 text-3xl flex items-start justify-between w-full">
                <p className="text-4xl font-bold">{funcionario.nome}</p>
                <ButtonDeleteFuncionario
                    funcionario={funcionario}
                />
            </div>
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
                    <div className="mt-2">
                        <select 
                            required
                            name="cargo_id"
                            className="select select-bordered w-full">
                            {cargos.map((cargo) => (
                                <option key={cargo.id} value={funcionario.cargo_id}>{cargo.nome}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <button
                            className="btn btn-neutral w-full"
                            type="submit">
                            Atualizar
                        </button>
                    </div>
                </form>
            </div>
            
        </>
        
    );
}

export default DetailFuncionario;