import { useRecoilValue } from 'recoil'
import { filteredTodosState } from '../selectors/filteredTodosSelector'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useRecoilValue(filteredTodosState)

  if (!todos || todos.length === 0) {
    return (
      <div className="empty-state">
        🎯 Nenhuma tarefa encontrada. <br />
        Que tal adicionar uma nova?
      </div>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
