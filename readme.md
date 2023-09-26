<span id="top"></span>

<p align="center">
 <img src="https://i.imgur.com/zfUMWMj.png" width="70"/>
  <img src="https://luiznola.dev/imgs/icon.svg" width="200"/>
  <img src="https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/250px-0004Charmander.png" width="100"/>
</p>
</p>

<p align="center">
   <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node-1"></a>
   <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express-blue"></a>
   <a href="https://sequelize.org/"><img src="https://img.shields.io/badge/Sequelize-purple"></a>
   <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/NPM-red"></a>
</p>

## 💡 Introduction

Uma api sobre batalha de pokemons!.

## 📝 Requisitos

- Docker!

## 🚀 Instalação

```sh
$ git clone https://github.com/LuizNola/pokemonAPI.git
```

## 📝 Configurando a API


### 1. .env

a env deste projeto ja esta preenchida! Apenas para facilitar sua configuração

### 2. Rodando o projeto

Para configurar o banco:

```sh
$ npm run init:dev
```

Para iniciar o projeto:
```sh
$ npm run dev
```

> abra em http://localhost:3000/

### 🤖 Lista de comandos

| Comando | Descrição      |
| --------- | -------- |
| `npm run test` | Roda todos os testes tanto de integração e unitarios |
| `npm run migration:run` | Roda todas as migrations no banco configurado |
| `npm run init:dev` | Comando usado para configurar os containers na primeira vez |
| `npm run dev` | Inicia o projeto em dev |

### Endpoits Pokemons

✅ **GET** `/pokemons`

↩ **Resposta** `HTTP Code 200 - OK`

```json
[
  {
    "id": 1,
    "tipo": "pikachu",
    "treinador": "Luiz",
    "nivel": 3
  }, {
    "id": 2,
    "tipo": "charizard",
    "treinador": "Thiago",
    "nivel": 3
  }
]
```
[🔝 De volta ao topo!](#top)

<br>

✅ **POST** `/pokemons`

➡ **Request**

| Atributo | Tipo     |
| --------- | -------- |
| tipo      | `String [mewtwo / charizard / pikachu]` |
| treinador | `String` |

```json
{
 "tipo": "pikachu",
 "treinador": "Luiz",
}
```

↩ **Resposta** `HTTP Code 200 - OK`

```json
{
  "id": 1,
  "tipo": "pikachu",
  "treinador": "Luiz",
  "nivel": 1
},
```

<br>

✅ **PUT** `/pokemons/:id`

➡ **Request**

| Atributo | tipo     |
| --------- | -------- |
| treinador | `String` |

```json
{
  "treinador": "Luizinho",
}
```

↩ **Resposta** `HTTP Code 204 - No Content`

<br>

✅ **DELETE** `/pokemons/:id`

↩ **Resposta** `HTTP Code 204 - No Content`


<br>

### ⚔️ Endpoints de Batalha

✅ **POST** `/batalhar/:pokemonAId/:pokemonBId`

↩ **Response** `HTTP Code 200 - OK`

```json
{
  "vencedor": {
    "id": 1,
    "tipo": "pikachu",
    "treinador": "Luiz",
    "nivel": 2
  },
  "perdedor": {
    "id": 2,
    "tipo": "charizard",
    "treinador": "Ash",
    "nivel": 0
  }
}
```

[🔝 back to top](#top)

<br>

## 👤 Author

<p align="center">
<p  align="center">O homem mais lindo do github:</p>
  <a  href="https://www.linkedin.com/in/jose-luiz-b717271b7//">
  <p align="center">
    <img  src="https://media.licdn.com/dms/image/D4D03AQEyOTii3p5b1w/profile-displayphoto-shrink_800_800/0/1688673551797?e=1701302400&v=beta&t=lhmnw2K32cwg6XGAjKXjbJzjarcHtH6b39fHK8rkLzM" width="400">
    </p>
    <p  align="center">
    Clique para meu linkedin
    </p>
  
  </a>
</p>


[🔝 back to top](#top)

<p align="center">
  <img src="https://luiznola.dev/imgs/icon.svg" width="200"/>
</p>