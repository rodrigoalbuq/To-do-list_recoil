import { useRecoilState } from 'recoil'
import { filterState } from '../atoms/filterAtom'

export default function Filter() {
  const [filter, setFilter] = useRecoilState(filterState)

  const filters = [
    { key: 'all', label: '📋 Todas', emoji: '📋' },
    { key: 'completed', label: '✅ Concluídas', emoji: '✅' },
    { key: 'pending', label: '⏳ Pendentes', emoji: '⏳' },
  ]

  return (
    <div className="filter-container">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`filter-button ${filter === key ? 'active' : ''}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
