import InputText from "@/components/InputText";
import { deleteCargo, getCargoById } from "../../../../../api";

const DeleteCargo = async ({ params }: { params: { slug: number } }) => {

    const cargos = await getCargoById(params.slug);
    let cargo = cargos[0];
    
    const handlerDeleteCargo = async (formData: FormData) => {
        'use server'
        const rawFormData = {
            keyName: formData.get('keyName')
        }

        if(rawFormData.keyName != cargo.nome) {
            return;
        }

        await deleteCargo(params.slug);
    }

    return (
        <>
        <div className="flex h-screen">
            <form action={handlerDeleteCargo} className="flex items-center justify-center w-full">
            <InputText
                    value=""
                    name="keyName"
                    placeholder="Confirme o nome do cargo"
                />
                <button 
                    type="submit"
                    className="btn btn-neutral"
                >
                Deletar
                </button>
           </form>
        </div>
           
        </>
    ); 
}

export default DeleteCargo;