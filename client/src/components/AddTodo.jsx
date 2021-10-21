const AddTodo = ({ theme, newTodo, newComplete, toggleNewComplete, handleNewTodo, createTodo }) => (
    <form className={` header-add-todo `} onSubmit={createTodo}>
        <div className={`header-add-todo-container ${theme ? 'header-add-todo-container-dark' : 'header-add-todo-container-light'}`}>
            <div className={`${newComplete ? 'check-selected' : 'check'}`} 
                 onClick={toggleNewComplete} ></div>
            <input className={`header-add-todo-container-input ${theme ? 'header-add-todo-container-input-dark' : 'header-add-todo-container-input-light'}`}
                   type='text' 
                   value={newTodo}
                   onChange={handleNewTodo}
                   placeholder='Create a new todo...'/>
        </div>
        
        {/* <button className='add-todo-btn'>Add</button> */}
    </form>
)

export default AddTodo