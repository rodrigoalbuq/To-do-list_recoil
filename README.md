# 📝 To-do List com React + Recoil

Uma aplicação moderna de gerenciamento de tarefas desenvolvida com React 18, Vite e Recoil para gerenciamento de estado global. A aplicação oferece uma interface elegante com persistência de dados e funcionalidades completas de CRUD.

![Preview da Aplicação](https://img.shields.io/badge/React-18.2.0-blue)
![Recoil](https://img.shields.io/badge/Recoil-0.7.7-green)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## ✨ Funcionalidades

### 🎯 Gerenciamento de Tarefas
- ➕ **Adicionar tarefas** com campo de entrada intuitivo
- ✅ **Marcar como concluída** com checkbox interativo
- 🗑️ **Remover tarefas** com confirmação visual
- 📋 **Listagem dinâmica** de todas as tarefas

### 🔍 Sistema de Filtros
- **Todas**: Visualiza todas as tarefas
- **Concluídas**: Apenas tarefas finalizadas
- **Pendentes**: Apenas tarefas em aberto

### 💾 Persistência de Dados
- **Salvamento automático** no localStorage
- **Restauração** de dados ao recarregar a página
- **Exportação** de backup em formato JSON
- **Limpeza** de dados com confirmação

### 🎨 Interface Moderna
- Design **responsivo** para mobile e desktop
- **Gradientes** e efeitos visuais modernos
- **Animações suaves** em todas as interações
- **Acessibilidade** com labels e ARIA

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd To-do-list_recoil

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Outros Comandos
```bash
# Build para produção
npm run build

# Preview da build
npm run preview

# Lint do código
npm run lint
```

## 🏗️ Estrutura do Projeto

```
src/
├── atoms/                  # Átomos do Recoil
│   ├── todosAtom.js       # Estado das tarefas
│   └── filterAtom.js      # Estado do filtro atual
├── selectors/             # Seletores do Recoil
│   └── filteredTodosSelector.js  # Tarefas filtradas
├── components/            # Componentes React
│   ├── NewTodoForm.jsx    # Formulário de nova tarefa
│   ├── TodoList.jsx       # Lista de tarefas
│   ├── TodoItem.jsx       # Item individual da tarefa
│   ├── Filter.jsx         # Botões de filtro
│   └── DataManager.jsx    # Gerenciador de persistência
├── hooks/                 # Hooks personalizados
│   └── useLocalStorage.js # Hook para localStorage
├── App.jsx               # Componente principal
├── App.css               # Estilos principais
├── main.jsx              # Ponto de entrada
└── index.css             # Estilos globais
```

## 🔧 Tecnologias Utilizadas

### Core
- **React 18.2.0** - Biblioteca de interface
- **Recoil 0.7.7** - Gerenciamento de estado global
- **Vite 7.1.7** - Build tool e dev server

### Estado Global com Recoil
- **RecoilRoot** - Provedor da aplicação
- **Átomos** - Estados atômicos (tarefas e filtro)
- **Seletores** - Estados derivados (tarefas filtradas)
- **Effects** - Persistência automática no localStorage

### Funcionalidades Implementadas
- **useRecoilState** - Leitura e escrita de estado
- **useRecoilValue** - Consumo de seletores
- **Atom Effects** - Sincronização com localStorage

## 📋 Conceitos Aplicados

### Gerenciamento de Estado
- Estado global centralizado com Recoil
- Separação de responsabilidades em átomos
- Seletores para lógica derivada
- Efeitos para side effects (localStorage)

### Boas Práticas
- Componentes funcionais com hooks
- Separação de lógica de negócio
- Tratamento de erros
- Acessibilidade (WCAG)
- Responsividade mobile-first

### Persistência
- Salvamento automático no localStorage
- Carregamento na inicialização
- Backup e restauração de dados
- Tratamento de erros de storage

## 🎨 Design System

### Cores Principais
- **Primária**: `#667eea` (Azul)
- **Secundária**: `#764ba2` (Roxo)
- **Sucesso**: `#28a745` (Verde)
- **Perigo**: `#ff4757` (Vermelho)

### Componentes
- Cards com glassmorphism
- Botões com gradientes
- Inputs com foco suave
- Animações de hover

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### Adaptações Mobile
- Formulário empilhado verticalmente
- Botões de filtro com quebra de linha
- Gerenciador de dados em coluna

## ♿ Acessibilidade

### Implementações
- Labels associados a inputs
- ARIA labels descritivos
- Navegação por teclado
- Contraste adequado
- Leitores de tela compatíveis

### Atributos ARIA
- `aria-label` em campos e botões
- `htmlFor` em labels
- Estados visuais claros

## 🔮 Próximas Melhorias

### Funcionalidades
- [ ] Edição inline de tarefas
- [ ] Categorias/tags para tarefas
- [ ] Data de vencimento
- [ ] Prioridades (baixa, média, alta)
- [ ] Busca/pesquisa de tarefas

## 📄 Licença

Este projeto está sob a licença MIT. 

## 👨‍💻 Desenvolvedor

Desenvolvido por Rodrigo Albuquerque , utilizando React, Recoil e Vite.
⭐ Se gostou do projeto, deixe uma estrela! Obrigado desde ja! ⭐

---


