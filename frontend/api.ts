import ICargo from "@/types/Cargo"
import IFuncionario from "@/types/Funcionario";
import IRelatorio from "@/types/Relatorio";

const baseUrl = "http://localhost:8000/api"

export const getAllCargos = async (): Promise<ICargo[]> => {
    const res = await fetch(`${baseUrl}/cargos`, {
        cache: "no-cache",
        mode: 'no-cors',
    });
    const cargos = res.json();
    return cargos
}

export const getCargoById = async (id: number): Promise<ICargo[]> => {
    const res = await fetch(`${baseUrl}/cargos/${id}`, {
        cache: "no-cache",
        mode: "no-cors",
    });
    return await res.json() as ICargo[];
}

export const getCargoByNome = async (nome: string): Promise<ICargo[]> => {
    const res = await fetch(`${baseUrl}/cargos/n/${nome}`, {
        cache: "no-cache",
        mode: "no-cors",
    });
    const cargo = res.json();
    return cargo;
}


export const addCargo = async (cargo: ICargo): Promise<void> => {
    const res = await fetch(`${baseUrl}/cargos`, {
        mode: 'no-cors',
        cache: "no-cache",
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cargo)
    });

    res;
}

export const updateCargo = async (cargo: ICargo, id: number): Promise<void> => {
    const res = await fetch(`${baseUrl}/cargos/${id}`, {
        cache: 'no-cache',
        method: 'PATCH',
        body: JSON.stringify(cargo)
    })

    res;
}

export const deleteCargo = async (id: number): Promise<void> => {
    const res = await fetch(`${baseUrl}/cargos/${id}`, {
        cache: 'no-cache',
        method: 'DELETE',
    });

    res;
}

export const getAllFuncionarios = async (): Promise<IFuncionario[]> => {
    const request = await fetch(`${baseUrl}/funcionarios`, {
        cache: "no-cache",
        mode: "no-cors",
    });
    const funcionarios = request.json();
    return funcionarios;
}

export const getFuncionarioByNome = async (nome: string): Promise<IFuncionario[]> => {
    const res = await fetch(`${baseUrl}/funcionarios/n/${nome}`, {
        cache: "no-cache",
        mode: "no-cors",
    });
    return await res.json() as IFuncionario[];
}

export const getFuncionarioById = async (id: number): Promise<IFuncionario[]> => {
    const res = await fetch(`${baseUrl}/funcionarios/${id}`, {
        cache: "no-cache",
        mode: "no-cors",
    });
    const funcionario = res.json();
    return funcionario;
}

export const addFuncionario = async (funcionario: IFuncionario): Promise<IFuncionario> => {
    const res = await fetch(`${baseUrl}/funcionarios`, {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(funcionario)
    }).catch((error) => {
        return error;
    });

    return res;
}

export const updateFuncionario = async (funcionario: IFuncionario, id: number): Promise<void> => {
    const res = await fetch(`${baseUrl}/funcionarios/${id}`, {
        cache: 'no-cache',
        method: 'PATCH',
        body: JSON.stringify(funcionario)
    })

    res;
}

export const deleteFuncionario = async (id: number): Promise<void> => {
    const res = await fetch(`${baseUrl}/funcionarios/${id}`, {
        cache: 'no-cache',
        method: 'DELETE',
    });

    res;
}

export const getAllRelatorios = async (): Promise<IRelatorio[]> => {
    const request = await fetch(`${baseUrl}/relatorios`, {
        cache: "no-cache",
        mode: "no-cors",
    });
    const relatorios = request.json();
    return relatorios;
}

export const getRelatorioByNomeCargo = async (params: string | number): Promise<IRelatorio[]> => {
    const res = await fetch(`${baseUrl}/relatorios/${params}`, {
        cache: "no-cache",
        mode: "no-cors",
    });
    
    return await res.json() as IRelatorio[];
}
