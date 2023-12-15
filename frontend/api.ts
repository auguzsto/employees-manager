import ICargo from "@/types/Cargo"
import IFuncionario from "@/types/Funcionario";

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
    const cargo = res.json();
    return cargo;
}


export const addCargo = async (cargo: ICargo): Promise<ICargo> => {
    const res = await fetch(`${baseUrl}/cargos`, {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(cargo)
    }).catch((error) => {
        return error;
    });

    return res;
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
