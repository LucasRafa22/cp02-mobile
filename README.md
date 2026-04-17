# 📱 CP2 - Aplicativo Mobile (Registro Acadêmico)

## 👨‍💻 Integrante

* **Lucas Rafael Solimene**
* **RM: 565194**

---

## 🎯 Descrição do Projeto

Este projeto consiste no desenvolvimento de um aplicativo mobile utilizando **React Native com Expo**, com o objetivo de registrar e exibir dados acadêmicos de um aluno.

O aplicativo foi desenvolvido como evolução do **Checkpoint 01 (CP1)**, incorporando novos conceitos como navegação entre telas, validação de formulário, persistência de dados e uso de máscaras de entrada.

---

## 🚀 Funcionalidades

### 📄 Tela de Cadastro

* Formulário com os campos:

  * Nome do aluno
  * Curso
  * Disciplina
  * Descrição
  * CPF (com máscara)
  * Telefone (com máscara)

* Validação:

  * Todos os campos são obrigatórios
  * Exibição de alerta caso algum campo esteja vazio

* Persistência:

  * Os dados são salvos localmente utilizando **AsyncStorage**

---

### 👤 Tela de Perfil

* Exibe:

  * Nome do aluno
  * Curso
  * Foto do aluno
  * RM

---

### 🔄 Persistência de Dados

* Os dados são armazenados localmente
* Ao reabrir o aplicativo, o formulário já aparece preenchido automaticamente

---

## 🛠️ Tecnologias Utilizadas

* React Native
* Expo
* React Navigation
* AsyncStorage
* react-native-mask-text

---

## 📦 Instalação e Execução

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npx expo start
```

---

## 🧪 Testes Realizados

* Navegação entre telas funcionando corretamente
* Validação de formulário impedindo envio com campos vazios
* Máscaras aplicadas corretamente em CPF e telefone
* Dados salvos e recuperados com AsyncStorage
* Formulário preenchido automaticamente ao reabrir o app

---

## 🎥 Demonstração

📌 Vídeo demonstrando o funcionamento do aplicativo:
Link: https://www.youtube.com/shorts/siXWP-2mtSk

📌 Projeto GitHub:
Link: https://github.com/LucasRafa22/cp02-mobile