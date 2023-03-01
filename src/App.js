import {useState} from "react";
import Todo from './components/Todo'

let id = 1

function App() {
    const [todos, setTodos] = useState([]);
    const [data, setData] = useState({title: '', description: ''})
    
    const dataOnChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const addTodo = () => {
        setTodos([...todos, {id: id, title: data.title, description: data.description, status: false}])
        setData({title: '', description: ''})
        id++
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((e) => e.id !== id); 
        setTodos(newTodos);
    }

    return (
        <div className='container'>
            <div className="App">
                <h1>TodoListApp</h1>
                <div className="input-block">
                    <label>Title</label>
                    <div>
                        <input className={data.title === ""? 'input border' :'input'} value={data.title} name="title" onChange={dataOnChange}/>
                        <br/>
                        <label className={data.title === ""? 'error' :'none'}>This field is empty</label>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="input-block">
                    <label>Description</label>
                    <div>
                        <input className={data.description === ""? 'input border' :'input'} value={data.description} name="description" onChange={dataOnChange}/>
                        <br/>
                        <label className={data.description === ""? 'error' :'none'}>This field is empty</label>
                    </div>
                </div>
                <br/>
                <br/>
                <button className="add-btn" disabled={data.description === "" || data.title === ""? true : false} onClick={addTodo}>Create</button>
                <div className='no-border item '>
                    <div className='item-id'>Id</div>
                    <div className='item-title'>Title</div>
                    <div className='item-description'>Description</div>
                    <div>Status</div>
                    <div>Delete</div>
                </div>
                {todos.map((e) => <Todo key={e.id} id={e.id} title={e.title} description={e.description} status={e.status} onDelete={() => deleteTodo(e.id)}/>)}

             

            </div>
        </div>
    );
}

export default App;
