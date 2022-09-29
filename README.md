# COGNOW WEBSERVICE

GRUPO DEVSTOPS

GITHUB DO PROJETO: https://github.com/bitmattz/cognow-backend

PARA ACESSAR O PROJETO, BASTA ACESSAR O IP **45.79.132.8:3333**
E SEGUIR OS PASSOS JUNTAMENTE COM OS TESTES PRESENTES NESSE ARQUIVO

# WEB SERVICE COGNOW

O projeto se concentra atualmente em **3 endpoints**:

- **“/users”** e **“/users/avatar”** para **criar** e **adicionar foto** 
ao usuário
- **“/sessions”** para realizar o **login** para autenticação
- **“/lessons”** e **"/lessons/content"** para **criar** e **adicionar conteúdos (foto, vídeo e áudio)** à aula

# Testes

### Criando um usuário (POST, /users)

![Untitled](COGNOW%20WEBSERVICE%202663ad9a665547f293f679aedceca6a6/Untitled.png)

### Fazendo login (POST, /sessions)

![Untitled](COGNOW%20WEBSERVICE%202663ad9a665547f293f679aedceca6a6/Untitled%201.png)

### **Adicionando imagem ao usuário** (PATCH, /users/avatar)

Usar o token obtido no passo anterior

![Untitled](COGNOW%20WEBSERVICE%202663ad9a665547f293f679aedceca6a6/Untitled%202.png)

![Untitled](COGNOW%20WEBSERVICE%202663ad9a665547f293f679aedceca6a6/Untitled%203.png)

### **Adicionando aula** (POST, /lessons)

Utilizar também o token obtido em “/session” para todos os endpoints a seguir

![Untitled](COGNOW%20WEBSERVICE%202663ad9a665547f293f679aedceca6a6/Untitled%204.png)

### Visualizando **aulas** (GET, /lessons)

![Untitled](COGNOW%20WEBSERVICE%202663ad9a665547f293f679aedceca6a6/Untitled%205.png)

### Deletando **aula** (DELETE, /lessons/{id da aula})

![Untitled](COGNOW%20WEBSERVICE%202663ad9a665547f293f679aedceca6a6/Untitled%206.png)
