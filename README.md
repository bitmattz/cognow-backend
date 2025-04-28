# COGNOW WEBSERVICE

GRUPO DEVSTOPS

GITHUB DO PROJETO: https://github.com/bitmattz/cognow-backend

PARA ACESSAR O PROJETO, BASTA ACESSAR O PROJETO
E SEGUIR OS PASSOS JUNTAMENTE COM OS TESTES PRESENTES NESSE ARQUIVO

Para rodar este projeto você precisa seguir os seguintes passos:

- Instalar **yarn** no seu computador
- **Ter** um banco de dados **postgres**
- Configurar o **ormconfig.json** para se conectar com o banco de dados
- rodar **“yarn install”** para instalar as dependências
- rodar **“yarn typeorm migration:run”** para rodar todas as migrations do banco de dados para criar as tabelas
- e por fim rodar “**yarn dev:server”** para rodar o programa

# WEB SERVICE COGNOW

O projeto se concentra atualmente em **3 endpoints**:

- **“/users”** e **“/users/avatar”** para **criar** e **adicionar foto** 
ao usuário
- **“/sessions”** para realizar o **login** para autenticação
- **“/lessons”** e **"/lessons/content"** para **criar** e **adicionar conteúdos (foto, vídeo e áudio)** à aula

# Testes

### Criando um usuário (POST, /users)

![Untitled](https://user-images.githubusercontent.com/67442630/192924094-3a475520-fd60-47ca-b1f1-f03ff5ecd377.png)


### Fazendo login (POST, /sessions)

![Untitled 1](https://user-images.githubusercontent.com/67442630/192924137-628e0d90-d210-4514-9ac6-8c6b066dba72.png)

### **Adicionando imagem ao usuário** (PATCH, /users/avatar)

Usar o token obtido no passo anterior

![Untitled 2](https://user-images.githubusercontent.com/67442630/192924155-65c51b2e-1d24-4f93-af1c-86f56446c788.png)

![Untitled 3](https://user-images.githubusercontent.com/67442630/192924160-b0029443-1954-419a-ba01-ac3838bcf3fa.png)

### **Adicionando aula** (POST, /lessons)

Utilizar também o token obtido em “/session” para todos os endpoints a seguir

![Untitled 4](https://user-images.githubusercontent.com/67442630/192924197-071e76a0-8c34-4643-ac69-cb333befcfa7.png)

### Visualizando **aulas** (GET, /lessons)

![Untitled 5](https://user-images.githubusercontent.com/67442630/192924206-d248c421-0e29-4f09-8a68-1452aaa2ade2.png)

### Deletando **aula** (DELETE, /lessons/{id da aula})
![Untitled 6](https://user-images.githubusercontent.com/67442630/192924220-6ee184fa-f912-4981-9e17-dc0fc3c74d9a.png)

