import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoListItem from './components/TodoListItem';
import { useEffect, useState } from 'react';

const TODO_STORE_KEY = 'myTodo';

function App() {
  const [todos, setTodos] = useState([]);

  function storeTodo(allTodos) {
    localStorage.setItem(TODO_STORE_KEY, JSON.stringify(allTodos));
  }

  function fetchTodo() {
    const allTodos = localStorage.getItem(TODO_STORE_KEY);
    if(allTodos != null) {
      return JSON.parse(allTodos);
    } else {
      return  [];
    }
  }

  function addNewTodo(data) {
    const newTodo = { name: data, status: false };
    const allTodos = [newTodo, ...todos];
    storeTodo(allTodos)
    setTodos(allTodos);
  }

  function deleteTodo(index) {
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    setTodos(allTodos);
  } 

  function completeTodo(index) {
    const allTodos = JSON.parse(JSON.stringify(todos));
    allTodos[index].status = !allTodos[index].status;
    storeTodo(allTodos)
    setTodos(allTodos);
  }

  useEffect(function() {
      const myTodos = fetchTodo();
      console.log(myTodos);
      setTodos(myTodos);
  }, [])


  return (
    <div className='container'>
      <div className='my-heading'>My todo Application</div>
      <TodoForm onSubmitClick={addNewTodo} />
      {
        todos.map((item, index) => <TodoListItem key={index} index={index} onDeletePress={deleteTodo} onCompletePress={completeTodo} todo={item} />)
      }
      {
        todos.length == 0 && <div className='todo-placeholder'>Please add a new todo</div>
      }
    </div>
  );
}

export default App;
