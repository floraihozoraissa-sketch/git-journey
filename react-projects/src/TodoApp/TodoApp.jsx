import React, { useState } from 'react'
import './TodoApp.css'
import deleteIcon from '../assets/delete.svg'

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault()
        if (!input.trim()) return;

        const newTodo = {
            id: Date.now(),
            text: input, 
            completed: false,
        }

        setTodos([newTodo, ...todos]);
        setInput('');
    }

    const saveInput = (e) => {
        setInput(e.target.value);
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <div>
            <div className='todo-container'>
                <h1>To-Do List</h1>

                <form onSubmit={handleAddTodo}>
                    <input 
                        type="text" 
                        value={input}
                        onChange={saveInput}
                        placeholder='Enter a task'
                    />
                    <button type='submit'>Add</button>
                </form>

                <ul className="todo-list">
                    
                    {todos.map((todo) => (
                        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                            <span onClick={() => toggleComplete(todo.id)}>
                                {todo.text}
                            </span>

                            <button onClick={() => handleDelete(todo.id)}>
                                <img src={deleteIcon} alt="delete" />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoApp
