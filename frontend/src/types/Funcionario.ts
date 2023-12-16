interface IFuncionario extends Model {
    nome: string,
    data_nascimento: string,
    endereco_completo: string,
    cpf: string,
    email: string,
    telefone: string,
    cargo_id: number,
}

export default IFuncionario;