// Hook personalizado para gerenciar localStorage
export const useLocalStorage = () => {
  
  // Função para limpar todos os dados salvos
  const clearAllData = () => {
    try {
      localStorage.removeItem('todolist-recoil-todos')
      localStorage.removeItem('todolist-recoil-filter')
      
      // Dispara eventos personalizados para notificar os átomos
      window.dispatchEvent(new CustomEvent('localStorageChange', {
        detail: { key: 'todolist-recoil-todos', value: null }
      }))
      window.dispatchEvent(new CustomEvent('localStorageChange', {
        detail: { key: 'todolist-recoil-filter', value: null }
      }))
      
      console.log('Dados limpos do localStorage')
      return { success: true, message: 'Dados limpos com sucesso!' }
    } catch (error) {
      console.error('Erro ao limpar dados do localStorage:', error)
      return { success: false, message: 'Erro ao limpar dados. Tente novamente.' }
    }
  }

  // Função para exportar dados como JSON
  const exportData = () => {
    try {
      const todos = localStorage.getItem('todolist-recoil-todos')
      const filter = localStorage.getItem('todolist-recoil-filter')
      
      const data = {
        todos: todos ? JSON.parse(todos) : [],
        filter: filter || 'all',
        exportDate: new Date().toISOString(),
        version: '1.0.0'
      }
      
      // Cria um blob com os dados e faz download
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `todolist-backup-${new Date().toISOString().split('T')[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      
      return { success: true, message: 'Backup exportado com sucesso!' }
    } catch (error) {
      console.error('Erro ao exportar dados:', error)
      return { success: false, message: 'Erro ao exportar dados. Tente novamente.' }
    }
  }

  // Função para verificar se há dados salvos
  const hasStoredData = () => {
    try {
      const todos = localStorage.getItem('todolist-recoil-todos')
      return todos && JSON.parse(todos).length > 0
    } catch (error) {
      return false
    }
  }

  return {
    clearAllData,
    exportData,
    hasStoredData
  }
}