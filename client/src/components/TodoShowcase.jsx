const TodoShowcase = ({ theme, mobile, status, showAll, showActive, showCompleted }) => (
    <div className={`${mobile ? 'display-none' : ''}`}>
        <div className={`showcase ${theme ? 'showcase-dark': 'showcase-light'}`}>
            <div className='showcase-status'>
                <div className={`showcase-status-item 
                                ${status === 'all' ? 'showcase-status-item-selected' : ''}`} 
                                onClick={showAll}>
                    All
                </div>
                <div className={`showcase-status-item 
                                ${status === 'active' ? 'showcase-status-item-selected' : ''}`} 
                                onClick={showActive}>
                    Active
                </div>
                <div className={`showcase-status-item 
                                ${status === 'completed' ? 'showcase-status-item-selected' : ''}`} 
                                onClick={showCompleted}>
                    Completed
                </div>
            </div>
            
        </div>
    </div>
    
)

export default TodoShowcase