import Header from "@/components/Header";
import { getAllCargos, getFuncionarioById, updateFuncionario } from "../../../../api";
import IFuncionario from "@/types/Funcionario";
import ButtonDeleteFuncionario from "../components/ButtonDeleteFuncionario";
import FormUpdateFuncionario from "../components/FormUpdateFuncionario";


const DetailFuncionario = async ({ params }: { params: { slug: string } }) => {
    const funcionarios = await getFuncionarioById(Number.parseInt(params.slug));
    let funcionario = funcionarios[0];
    const cargos = await getAllCargos();

    const handlerSubmitUpdateFuncionario = async (fromData: FormData) => {
        'use server'
        const rawFormData = {
            nome: fromData.get('nome'),
            data_nascimento: fromData.get('data_nascimento'),
            endereco_completo: fromData.get('endereco_completo'),
            cpf: fromData.get('cpf'),
            email: fromData.get('email'),
            telefone: fromData.get('telefone'),
            cargo_id: fromData.get('cargo_id')!.valueOf()
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
               <FormUpdateFuncionario 
                    cargos={cargos}
                    funcionario={funcionario}
                    handler={handlerSubmitUpdateFuncionario}
               />
            </div>
            
        </>
        
    );
}

export default DetailFuncionario;