import Header from "@/components/Header";
import { getCargoById, updateCargo } from "../../../../api";
import ICargo from "@/types/Cargo";
import FormUpdateCargo from "../components/FormUpdateCargo";
import ButtonDeleteCargo from "../components/ButtonDeleteCargo";


const DetailCargo = async ({ params }: { params: { slug: string } }) => {
    const cargos = await getCargoById(Number.parseInt(params.slug));
    let cargo = cargos[0];

    const handlerSubmitUpdateCargo = async (fromData: FormData) => {
        'use server'
        const rawFormData = {
            nome: fromData.get('nome'),
            salario: fromData.get('salario'),
        }
        await updateCargo(rawFormData as ICargo, Number.parseInt(params.slug));
    }
    
    return (
        <>
            <Header title="Cargos"/>
            <div>
                <div className="p-1 mt-1 text-3xl flex items-start justify-between w-full">
                <b>{cargo.nome}</b>
                {/* <Link href={`/cargos/deletar/${cargo.id}`}>
                    <button className="btn btn-error text-white">Deletar</button>
                </Link> */}
                <ButtonDeleteCargo
                    cargo={cargo}
                />
                </div>
                
                <FormUpdateCargo 
                    handler={handlerSubmitUpdateCargo}
                    cargo={cargo}
                />
            </div>
            
        </>
        
    );
}

export default DetailCargo;