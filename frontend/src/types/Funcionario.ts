interface IFuncionario extends Model {
    nome: string,
    data_nascimento: string,
    cpf: string,
    email: string,
    telefone: string,
    cargo_id: number,
}

export default IFuncionario;