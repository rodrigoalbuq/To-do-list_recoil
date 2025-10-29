import { atom } from 'recoil'

// Função para carregar dados do localStorage
const loadTodosFromStorage = () => {
  try {
    const savedTodos = localStorage.getItem('todolist-recoil-todos')
    return savedTodos ? JSON.parse(savedTodos) : []
  } catch (error) {
    console.error('Erro ao carregar tarefas do localStorage:', error)
    return []
  }
}

// Função para salvar dados no localStorage
const saveTodosToStorage = (todos) => {
  try {
    localStorage.setItem('todolist-recoil-todos', JSON.stringify(todos))
  } catch (error) {
    console.error('Erro ao salvar tarefas no localStorage:', error)
  }
}

export const todosState = atom({
  key: 'todosState',
  default: loadTodosFromStorage(), // Carrega do localStorage na inicialização
  effects: [
    // Efeito para sincronizar com localStorage sempre que o estado mudar
    ({ onSet }) => {
      onSet((newTodos) => {
        saveTodosToStorage(newTodos)
      })
    }
  ]
})
