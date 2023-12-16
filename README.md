# Tecnologias (Frontend)
 - NextJS
 - React
 - TypeScript

# Tecnologias (Backend)
 - PHP
 - MySQL

# Como executar localmente?
### Requerimentos
- Xamp (>=8.2.12-0-VS16)
- NodeJS (>=20.10.0) & NPM (>=10.2.5)
- PHP (>=8.2.12)
- MySQL (>=15.1)

### Executando o backend

1. Clone o repositório.
```
git clone https://github.com/auguzsto/employees-manager.git
```
2. Abra a pasta do projeto para configurar o banco de dados.
    1. Navegue até o ditório backend/
    2. Abra o arquivo **config.php** e ponha suas configurações locais.
3. Abra a pasta do projeto e execute o terminal.
4. Com o terminal aberto execute os seguintes comandos.
```
cd .\backend\ 
```
``` 
C:\xampp\php\php.exe -S 0.0.0.0:8000 -t .
```
5. Deixe o terminal aberto e siga as instruções para executar o frontend

6. http://localhost:8000/ - **ATENÇÃO:** Necessário abrir a URL do backend, pelo menos, uma vez para garantir a migração do schema do banco de dados.
### Executando o frontend
1. Abra a pasta do projeto e execute o terminal
2. Com o terminal aberto execute os seguintes comandos
```
cd .\frontend\
```
```
npm install
```
```
npm run build
```
```
npm run start
```
3. Deixe o terminal aberto.
5. http://localhost:300/

    