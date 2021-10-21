import DeleteIcon from '../assets/design/images/icon-cross.svg'

const Todo = ({ theme, todo, completeTodo, deleteTodo }) =>{
    const textDecorartion = () =>{
        if(theme && todo.complete)
            return 'todos-todo-container-text-dark-done'
        if(!theme && todo.complete)
            return 'todos-todo-container-text-light-done'
    }
    return(
        <>
            <div className="todos-todo">
                <div className="todos-todo-container">
                    <div className={`${todo.complete ? 'check-selected' : 'check'}`} onClick={() => completeTodo(todo._id)}></div>
                    <div className={`todos-todo-container-text 
                                    ${theme ? 'todos-todo-container-text-dark': 'todos-todo-container-text-light'}
                                    ${textDecorartion()}`}>
                        {todo.text}
                    </div>
                </div>
                
                <div className="todos-todo-delete">
                    <img src={DeleteIcon} alt="" onClick={() => deleteTodo(todo._id)}/>
                </div>
            </div>
            <hr className={`hr ${theme ? 'hr-dark': 'hr-light'}`}/> 
        </>
    )
}

export default Todo