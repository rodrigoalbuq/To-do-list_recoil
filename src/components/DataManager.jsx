import { useLocalStorage } from '../hooks/useLocalStorage'

export default function DataManager() {
  const { clearAllData, exportData, hasStoredData } = useLocalStorage()

  const hasSavedData = hasStoredData()

  if (!hasSavedData) {
    return null // Não mostra se não há dados salvos
  }

  return (
    <div className="data-manager">
      <div className="data-manager-info">
        💾 Dados salvos automaticamente
      </div>
      <div className="data-manager-actions">
        <button onClick={exportData} className="export-button" title="Fazer backup dos dados">
          📥 Exportar
        </button>
        <button 
          onClick={() => {
            if (window.confirm('Tem certeza que deseja limpar todos os dados salvos? Esta ação não pode ser desfeita.')) {
              clearAllData()
            }
          }} 
          className="clear-button"
          title="Limpar todos os dados salvos"
        >
          🗑️ Limpar Dados
        </button>
      </div>
    </div>
  )
}