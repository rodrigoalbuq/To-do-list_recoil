# 📝 To-do List com React + Recoil

Uma aplicação moderna de gerenciamento de tarefas desenvolvida com React 18, Vite e Recoil para gerenciamento de estado global. A aplicação oferece uma interface elegante com persistência de dados e funcionalidades completas de CRUD.

![Preview da Aplicação](https://img.shields.io/badge/React-18.2.0-blue)
![Recoil](https://img.shields.io/badge/Recoil-0.7.7-green)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)

## ✨ Funcionalidades

### 🎯 Gerenciamento de Tarefas
- ➕ **Adicionar tarefas** com campo de entrada intuitivo e validação
- ✅ **Marcar como concluída** com checkbox interativo
- 🗑️ **Remover tarefas** com confirmação elegante via toast
- 📋 **Listagem dinâmica** de todas as tarefas com contadores
- 🔄 **Estados visuais** para tarefas concluídas e pendentes

### 🔍 Sistema de Filtros Avançado
- **Todas**: Visualiza todas as tarefas
- **Concluídas**: Apenas tarefas finalizadas  
- **Pendentes**: Apenas tarefas em aberto
- 🎯 **Filtros persistentes** mantidos entre sessões
- 📊 **Contadores dinâmicos** por categoria
- ♿ **ARIA pressed** para estados ativos

### 💾 Persistência Automática
- **Salvamento automático** no localStorage via Recoil Effects
- **Restauração** instantânea de dados ao recarregar
- **Sincronização** automática entre abas/janelas
- **Exportação** de backup em formato JSON com timestamp
- **Limpeza** de dados com toast de confirmação elegante
- 🔄 **Sem reloads** - atualizações em tempo real

### 📢 Sistema de Feedback Não Bloqueante
- **Toasts elegantes** para todas as operações
- **Confirmações interativas** sem popups nativos
- **Feedback visual** para ações de sucesso/erro
- **Animações suaves** com entrada e saída
- 📱 **Responsivo** com layout adaptativo

### 🎨 Interface Moderna & Acessível
- Design **responsivo** para mobile e desktop
- **Gradientes** e efeitos visuais harmonizados
- **Animações suaves** em todas as interações
- ♿ **Acessibilidade completa** com WCAG 2.1
- 🎨 **Design System** consistente com paleta unificada

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
│   ├── todosAtom.js       # Estado das tarefas + effects localStorage
│   └── filterAtom.js      # Estado do filtro + persistência
├── selectors/             # Seletores do Recoil
│   └── filteredTodosSelector.js  # Tarefas filtradas dinamicamente
├── components/            # Componentes React
│   ├── NewTodoForm.jsx    # Formulário com validação e acessibilidade
│   ├── TodoList.jsx       # Lista com contadores e ARIA
│   ├── TodoItem.jsx       # Item com estados visuais completos
│   ├── Filter.jsx         # Filtros com aria-pressed
│   ├── DataManager.jsx    # Gerenciador com toast de confirmação
│   └── Toast.jsx          # Sistema de notificações não bloqueantes
├── hooks/                 # Hooks personalizados
│   └── useLocalStorage.js # Hook para localStorage + eventos
├── App.jsx               # Componente principal
├── App.css               # Estilos principais + design system
├── main.jsx              # Ponto de entrada com RecoilRoot
└── index.css             # Estilos globais + responsividade
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
- **Atom Effects** - Persistência automática + eventos localStorage
- **Custom Events** - Sincronização entre componentes

## 📋 Conceitos Aplicados

### Gerenciamento de Estado Avançado
- Estado global centralizado com Recoil
- Separação de responsabilidades em átomos
- Seletores para lógica derivada
- **Effects com listeners** para localStorage
- **Event-driven updates** sem reloads
- Sincronização automática entre abas

### Boas Práticas de Desenvolvimento
- Componentes funcionais com hooks
- Separação de lógica de negócio
- Tratamento robusto de erros
- **Validação de formulários** client-side
- **Feedback não bloqueante** para usuário
- Clean code e arquitetura modular

### Acessibilidade (WCAG 2.1)
- **ARIA labels** e **aria-pressed** completos
- **Roles semânticos** (dialog, list, form)
- **Labels associados** com htmlFor
- **Navegação por teclado** funcional
- **Leitores de tela** totalmente compatíveis
- **Contraste adequado** em todos os elementos

### Persistência & Performance
- **Salvamento automático** via Recoil Effects
- **Carregamento otimizado** na inicialização
- **Backup/restore** com validação JSON
- **Event listeners** para mudanças externas
- **Cleanup adequado** de listeners
- Tratamento de erros de storage robusto

### Sistema de Feedback UX
- **Toast notifications** não bloqueantes
- **Confirmações interativas** sem popups
- **Estados visuais** claros e consistentes
- **Animações significativas** com propósito
- **Responsividade** em todos os breakpoints

## 🎨 Design System

### Paleta de Cores Harmonizada
- **Gradiente Principal**: `#667eea → #764ba2` (Container, Toasts, Filtros ativos)
- **Destrutivo/Ação**: `#ff4757 → #ff3742` (Remoção, Confirmações)
- **Sucesso**: `#28a745 → #20c997` (Exportação, Feedback positivo)
- **Neutros**: Brancos transparentes e `#667eea` para textos

### Componentes do Sistema
- **Cards**: Glassmorphism com backdrop-filter
- **Botões**: Gradientes com hover effects e elevação
- **Inputs**: Bordas arredondadas com foco suave
- **Toasts**: Sistema completo (sucesso, erro, confirmação)
- **Filtros**: Estados visuais com aria-pressed
- **Listas**: Hover effects com movimento lateral

### Animações & Transições
- **Timing**: 0.3s ease para consistência
- **Hover**: translateY(-2px) + box-shadow dinâmica
- **Toast**: Slide-in/out com fade
- **Estados**: Transições suaves entre completed/pending

## 📱 Responsividade

A aplicação é totalmente responsiva com breakpoints:
- **Desktop**: > 768px
- **Mobile**: ≤ 768px

### Adaptações Mobile
- Formulário empilhado verticalmente
- Botões de filtro com quebra de linha
- Gerenciador de dados em coluna
- **Toasts**: Full-width com botões empilhados
- **Espaçamentos**: Otimizados para touch

## ♿ Acessibilidade (WCAG 2.1 AA)

### Implementações Avançadas
- **Labels associados** com htmlFor + IDs únicos
- **ARIA pressed** nos filtros (true/false)
- **ARIA live regions** para atualizações dinâmicas
- **Role attributes** (dialog, list, form, listitem)
- **Aria-describedby** para instruções contextuais
- **Validação de formulário** com feedback acessível

### Navegação e Interação
- **Navegação por teclado** completa (Tab, Enter, Space)
- **Focus management** em toasts e formulários
- **Estados visuais** claros para todos os elementos
- **Contraste** adequado (AA+ em todos os textos)
- **Touch targets** > 44px para mobile
- **Screen reader** totalmente compatível

## 🎉 Funcionalidades Implementadas Recentemente

### ✅ Sistema de Toast Elegante
- **Confirmações interativas** sem popups nativos
- **Cores harmonizadas** com design system
- **Responsivo** com layout adaptativo
- **Acessível** com ARIA completo

### ✅ Persistência Automática Avançada  
- **Recoil Effects** com localStorage listeners
- **Sincronização** entre abas sem reload
- **Event-driven updates** em tempo real
- **Backup/restore** com validação

### ✅ Acessibilidade Completa
- **ARIA pressed** em filtros ativos
- **Aria-live** para atualizações dinâmicas
- **Validação** de formulário acessível
- **Navegação** por teclado 100% funcional

## 🔮 Próximas Melhorias

### Funcionalidades Planejadas
- [ ] **Edição inline** de tarefas com double-click
- [ ] **Categorias/tags** coloridas para organização
- [ ] **Data de vencimento** com alertas visuais
- [ ] **Prioridades** (baixa, média, alta) com ícones
- [ ] **Busca/pesquisa** em tempo real
- [ ] **Arrastar e soltar** para reordenação

### Melhorias Técnicas
- [ ] **Testes automatizados** (Jest + Testing Library)
- [ ] **Testes E2E** (Cypress/Playwright)
- [ ] **PWA** com Service Workers
- [ ] **Sincronização** com API externa
- [ ] **Modo escuro/claro** com preferência do sistema
- [ ] **Undo/Redo** para operações

## 🚀 Diferenciais Técnicos

### 🔥 Destacam Esta Implementação
- **Zero Popups Nativos**: Todas as confirmações via toast elegantes
- **Persistência Reativa**: Recoil Effects + localStorage com listeners
- **Acessibilidade Completa**: WCAG 2.1 AA em todos os componentes  
- **Design System Unificado**: Paleta de cores e animações consistentes
- **Feedback Não Bloqueante**: UX moderna sem interrupções
- **Responsividade Nativa**: Mobile-first em todos os elementos

### ⚡ Performance & Arquitetura
- **Estado Global Otimizado**: Recoil com seletores eficientes
- **Event-Driven Updates**: Sincronização sem reloads
- **Componentes Reutilizáveis**: Toast system extensível
- **Clean Code**: Separação clara de responsabilidades
- **Type Safety**: Validações robustas em runtime

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ por **Rodrigo Albuquerque** usando React, Recoil e Vite.

### 🌟 Conecte-se
- **GitHub**: [rodrigoalbuq](https://github.com/rodrigoalbuq)


⭐ **Se gostou do projeto, deixe uma estrela!** Isso ajuda muito! ⭐

---

### 📚 Recursos de Aprendizado

- [Documentação do Recoil](https://recoiljs.org/) - Estado global para React
- [Documentação do React](https://react.dev/) - Biblioteca de interfaces
- [Documentação do Vite](https://vitejs.dev/) - Build tool moderna
- [Guia de Acessibilidade](https://www.w3.org/WAI/WCAG21/quickref/) - WCAG 2.1
- [Design System](https://designsystemsrepo.com/) - Melhores práticas




