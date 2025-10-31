import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Toast from './Toast'

export default function DataManager() {
  const { clearAllData, exportData, hasStoredData } = useLocalStorage()
  const [toast, setToast] = useState(null)

  const hasSavedData = hasStoredData()

  const handleExport = () => {
    const result = exportData()
    setToast({
      message: result.message,
      type: result.success ? 'success' : 'error',
      isConfirm: false
    })
  }

  const handleClearDataRequest = () => {
    setToast({
      message: 'Tem certeza que deseja limpar todos os dados salvos? Esta ação não pode ser desfeita.',
      type: 'warning',
      isConfirm: true,
      confirmText: '🗑️ Sim, limpar',
      cancelText: '❌ Cancelar'
    })
  }

  const handleConfirmClear = () => {
    const result = clearAllData()
    setToast({
      message: result.message,
      type: result.success ? 'success' : 'error',
      isConfirm: false
    })
  }

  const handleCancelClear = () => {
    // Apenas fecha o toast
  }

  const closeToast = () => {
    setToast(null)
  }

  if (!hasSavedData) {
    return null // Não mostra se não há dados salvos
  }

  return (
    <>
      <div className="data-manager">
        <div className="data-manager-info">
          💾 Dados salvos automaticamente
        </div>
        <div className="data-manager-actions">
          <button 
            onClick={handleExport} 
            className="export-button" 
            title="Fazer backup dos dados"
            aria-label="Exportar dados para arquivo JSON"
          >
            📥 Exportar
          </button>
          <button 
            onClick={handleClearDataRequest}
            className="clear-button"
            title="Limpar todos os dados salvos"
            aria-label="Limpar todos os dados salvos no navegador"
          >
            🗑️ Limpar Dados
          </button>
        </div>
      </div>
      
      {toast && (
        <Toast 
          message={toast.message}
          type={toast.type}
          isConfirm={toast.isConfirm}
          onConfirm={toast.isConfirm ? handleConfirmClear : undefined}
          onCancel={toast.isConfirm ? handleCancelClear : undefined}
          confirmText={toast.confirmText}
          cancelText={toast.cancelText}
          onClose={closeToast}
        />
      )}
    </>
  )
}