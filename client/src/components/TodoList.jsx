import Todo from './Todo'
import TodoShowcaseMobile from './TodoShowcaseMobile'
import TodoShowcase from './TodoShowcase'

const TodoList = ({ theme, mobile, todos, status, showAll, showActive, showCompleted, completeTodo, activeNum, deleteTodo, deleteComplete }) =>{ 
    const setResults = () => {
        if(status === 'all')
            return todos
        if(status === 'active')
            return todos.filter(t => t.complete === false)
        if(status === 'completed')
            return todos.filter(t => t.complete === true) 
    }
    const results = todos ? setResults() : []
    return(
        <>
            <div className={`todos ${theme ? 'todos-dark' : 'todos-light'}`}>
                {
                    results &&
                    results.map(t => 
                        <Todo key={t._id} theme={theme} todo={t}  completeTodo={completeTodo} deleteTodo={deleteTodo}/>
                    )
                    
                }
                <div className={`todos-details ${theme ? 'todos-details-dark ' : 'todos-details-light '}`}>
                        <div className="todos-details-number">{activeNum} items left</div>
                        <TodoShowcase theme={theme}
                                mobile={mobile}  
                                status={status} 
                                showAll={showAll} 
                                showActive={showActive} 
                                showCompleted={showCompleted}/>
                        <div className="todos-details-clear" onClick={() => deleteComplete()}>Clear completed</div>
                </div>
            </div>
            <TodoShowcaseMobile theme={theme}
                                mobile={mobile}  
                                status={status} 
                                showAll={showAll} 
                                showActive={showActive} 
                                showCompleted={showCompleted}/>
        </>
    )
}
export default TodoList