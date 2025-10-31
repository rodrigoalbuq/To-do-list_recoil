import { useRecoilState } from 'recoil'
import { filterState } from '../atoms/filterAtom'

export default function Filter() {
  const [filter, setFilter] = useRecoilState(filterState)

  const filters = [
    { key: 'all', label: '📋 Todas', description: 'Mostrar todas as tarefas' },
    { key: 'completed', label: '✅ Concluídas', description: 'Mostrar apenas tarefas concluídas' },
    { key: 'pending', label: '⏳ Pendentes', description: 'Mostrar apenas tarefas pendentes' },
  ]

  return (
    <div className="filter-container" role="group" aria-label="Filtros de visualização de tarefas">
      {filters.map(({ key, label, description }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`filter-button ${filter === key ? 'active' : ''}`}
          aria-pressed={filter === key}
          aria-label={description}
          title={description}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
