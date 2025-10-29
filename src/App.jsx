import './App.css'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'
import Filter from './components/Filter'
import DataManager from './components/DataManager'

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">📝 To-do List</h1>
      <div className="todo-content">
        <NewTodoForm />
        <Filter />
        <TodoList />
        <DataManager />
      </div>
    </div>
  )
}

export default App
