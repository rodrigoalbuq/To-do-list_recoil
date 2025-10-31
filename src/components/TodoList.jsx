import { useRecoilValue } from 'recoil'
import { filteredTodosState } from '../selectors/filteredTodosSelector'
import { filterState } from '../atoms/filterAtom'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodosState)
  const currentFilter = useRecoilValue(filterState)

  const getFilterLabel = (filter) => {
    switch (filter) {
      case 'completed': return 'concluídas'
      case 'pending': return 'pendentes'
      default: return 'todas'
    }
  }

  if (!todos || todos.length === 0) {
    return (
      <div className="empty-state" role="status" aria-live="polite">
        🎯 Nenhuma tarefa {getFilterLabel(currentFilter)} encontrada. <br />
        {currentFilter === 'all' ? 'Que tal adicionar uma nova?' : 'Experimente outro filtro ou adicione uma nova tarefa.'}
      </div>
    )
  }

  return (
    <ul 
      className="todo-list" 
      role="list"
      aria-label={`Lista de tarefas ${getFilterLabel(currentFilter)} (${todos.length} ${todos.length === 1 ? 'tarefa' : 'tarefas'})`}
    >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
