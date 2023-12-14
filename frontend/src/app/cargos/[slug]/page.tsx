import Header from "@/components/Header";
import { getCargoById } from "../../../../api";
import InputTextNumber from "@/components/InputTextNumber";


const DetailCargo = async ({ params }: { params: { slug: string } }) => {
    const cargos = await getCargoById(Number.parseInt(params.slug));
    const cargo = cargos[0];

    return (
        <>
            <Header/>
            <div className="mt-5">
               <p className="text-4xl font-bold">{cargo.nome}</p>
               <form>
                    <input
                        required 
                        type="text" 
                        name="nome"
                        value={cargo.nome}
                        placeholder="Nome do cargo" 
                        className="input input-bordered w-full max-w-xs"
                    />
                    <InputTextNumber
                        value={cargo.salario}
                        type="salario"
                        name="salario"
                        placeholder="Salário"
                    />
                    <button
                        className="btn btn-neutral"
                        type="submit">Atualizar</button>
                </form>
            </div>
            
        </>
        
    );
}

export default DetailCargo;