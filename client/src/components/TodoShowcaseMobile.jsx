const TodoShowcaseMobile = ({ theme, mobile, status, showAll, showActive, showCompleted }) => (
    <div className={`${mobile ? '' : 'display-none'}`}>
        <div className={`showcase-mobile ${theme ? 'showcase-mobile-dark': 'showcase-mobile-light'}`}>
            <div className='showcase-mobile-status'>
                <div className={`showcase-mobile-status-item 
                                ${status === 'all' ? 'showcase-mobile-status-item-selected' : ''}`} 
                                onClick={showAll}>
                    All
                </div>
                <div className={`showcase-mobile-status-item 
                                ${status === 'active' ? 'showcase-mobile-status-item-selected' : ''}`} 
                                onClick={showActive}>
                    Active
                </div>
                <div className={`showcase-mobile-status-item 
                                ${status === 'completed' ? 'showcase-mobile-status-item-selected' : ''}`} 
                                onClick={showCompleted}>
                    Completed
                </div>
            </div>
            
        </div>
    </div>
    
)

export default TodoShowcaseMobile