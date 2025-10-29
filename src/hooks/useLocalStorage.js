// Hook personalizado para gerenciar localStorage
export const useLocalStorage = () => {
  
  // Função para limpar todos os dados salvos
  const clearAllData = () => {
    try {
      localStorage.removeItem('todolist-recoil-todos')
      localStorage.removeItem('todolist-recoil-filter')
      console.log('Dados limpos do localStorage')
      // Recarrega a página para aplicar as mudanças
      window.location.reload()
    } catch (error) {
      console.error('Erro ao limpar dados do localStorage:', error)
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
        exportDate: new Date().toISOString()
      }
      
      // Cria um blob com os dados e faz download
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `todolist-backup-${new Date().toISOString().split('T')[0]}.json`
      a.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Erro ao exportar dados:', error)
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