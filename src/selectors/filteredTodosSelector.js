import { selector } from 'recoil'
import { todosState } from '../atoms/todosAtom'
import { filterState } from '../atoms/filterAtom'

export const filteredTodosState = selector({
  key: 'filteredTodosState',
  get: ({ get }) => {
    const filter = get(filterState)
    const todos = get(todosState)

    switch (filter) {
      case 'completed':
        return todos.filter((t) => t.completed)
      case 'pending':
        return todos.filter((t) => !t.completed)
      default:
        return todos
    }
  },
})
