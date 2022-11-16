import "./TodoList.scss";
import React, {useState} from 'react'

const TodoList = () => {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo,
        };

        setList([...list, newTodo]);

        setInput("");
    };

    const onChange = (e) => {
        setInput(e.target.value)
    };

    const onClick = () => {
        addTodo(input)
    };

    console.log(input);
    console.log(list);

    const deleteItems = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList);
    }

    

  return (
    <div className="todoList">

        <h3 className="todoList__title">Todo List</h3>

        <div className="todoList__inputArea">
        <input
        type="text"
        value={input}
        onChange={onChange}
        className="todoList__input"
        />

        <button 
        onClick = {onClick} 
        className="todoList__add">Add</button>


        </div>
        

        <ul className="todoList__content">
            {list.map((todo) => (
                <li key={todo.id} className="todoList__content">
                    {todo.todo}
                    <button onClick = {() => deleteItems(todo.id)} className="todoList__delete">✖️</button>
                </li>
            ))}
        </ul>



    </div>



  )

}

export default TodoList