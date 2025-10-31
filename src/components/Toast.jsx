import { useState, useEffect } from 'react'

export default function Toast({ 
  message, 
  type = 'success', 
  duration = 3000, 
  onClose, 
  isConfirm = false, 
  onConfirm, 
  onCancel,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar'
}) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!isConfirm) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          onClose && onClose()
        }, 300) // Aguarda a animação de saída
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, onClose, isConfirm])

  const handleConfirm = () => {
    setIsVisible(false)
    setTimeout(() => {
      onConfirm && onConfirm()
      onClose && onClose()
    }, 300)
  }

  const handleCancel = () => {
    setIsVisible(false)
    setTimeout(() => {
      onCancel && onCancel()
      onClose && onClose()
    }, 300)
  }

  if (!message) return null

  return (
    <div 
      className={`toast toast-${type} ${isVisible ? 'toast-visible' : 'toast-hidden'} ${isConfirm ? 'toast-confirm' : ''}`}
      role={isConfirm ? 'dialog' : 'alert'}
      aria-live="polite"
      aria-modal={isConfirm}
    >
      <div className="toast-content">
        <span className="toast-icon">
          {isConfirm ? '❓' : type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
        </span>
        <span className="toast-message">{message}</span>
      </div>
      
      {isConfirm && (
        <div className="toast-actions">
          <button 
            onClick={handleConfirm} 
            className="toast-button toast-button-confirm"
            aria-label={confirmText}
          >
            {confirmText}
          </button>
          <button 
            onClick={handleCancel} 
            className="toast-button toast-button-cancel"
            aria-label={cancelText}
          >
            {cancelText}
          </button>
        </div>
      )}
    </div>
  )
}