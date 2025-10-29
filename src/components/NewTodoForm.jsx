import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todosState } from '../atoms/todosAtom'

export default function NewTodoForm() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useRecoilState(todosState)

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return

    const newTodo = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      text: trimmed,
      completed: false,
    }

    setTodos([newTodo, ...todos])
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="new-todo-form">
      <label htmlFor="new-todo-input" className="visually-hidden">
        Nova tarefa
      </label>
      <input
        id="new-todo-input"
        name="newTodo"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicione uma nova tarefa..."
        className="new-todo-input"
        aria-label="Digite uma nova tarefa"
      />
      <button type="submit" className="add-button">
        ➕ Adicionar
      </button>
    </form>
  )
}
