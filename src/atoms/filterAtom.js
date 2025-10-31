import { atom } from 'recoil'

// Função para carregar filtro do localStorage
const loadFilterFromStorage = () => {
  try {
    const savedFilter = localStorage.getItem('todolist-recoil-filter')
    return savedFilter || 'all'
  } catch (error) {
    console.error('Erro ao carregar filtro do localStorage:', error)
    return 'all'
  }
}

// Função para salvar filtro no localStorage
const saveFilterToStorage = (filter) => {
  try {
    localStorage.setItem('todolist-recoil-filter', filter)
  } catch (error) {
    console.error('Erro ao salvar filtro no localStorage:', error)
  }
}

export const filterState = atom({
  key: 'filterState',
  default: loadFilterFromStorage(), // Carrega do localStorage na inicialização
  effects: [
    // Efeito para sincronizar com localStorage sempre que o filtro mudar
    ({ onSet, setSelf }) => {
      onSet((newFilter) => {
        saveFilterToStorage(newFilter)
      })

      // Listener para mudanças no localStorage
      const handleStorageChange = (e) => {
        if (e.key === 'todolist-recoil-filter') {
          const newValue = e.newValue || 'all'
          setSelf(newValue)
        }
      }

      window.addEventListener('storage', handleStorageChange)

      // Listener personalizado para mudanças locais
      const handleLocalChange = (e) => {
        if (e.detail?.key === 'todolist-recoil-filter') {
          const newValue = e.detail.value || 'all'
          setSelf(newValue)
        }
      }

      window.addEventListener('localStorageChange', handleLocalChange)

      // Cleanup
      return () => {
        window.removeEventListener('storage', handleStorageChange)
        window.removeEventListener('localStorageChange', handleLocalChange)
      }
    }
  ]
})
