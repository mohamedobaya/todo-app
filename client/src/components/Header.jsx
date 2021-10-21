import MoonLogo from '../assets/design/images/icon-moon.svg';
import SunLogo from '../assets/design/images/icon-sun.svg';
import AddTodo from './AddTodo';

const Header = ({ theme, toggleTheme, newTodo, newComplete, toggleNewComplete, handleNewTodo, createTodo }) => (
    <div className={`header ${theme ? 'header-dark' : 'header-light'}`}>
        <div className="header-container">
            <div className="header-container-logo">TODO</div>
            <div className="header-container-btn">
                {
                    theme ?
                    <img src={SunLogo} alt="theme icon" className="header-container-btn-icon" onClick={toggleTheme}/>
                    :
                    <img src={MoonLogo} alt="theme icon" className="header-container-btn-icon" onClick={toggleTheme}/>
                }
            </div>
        </div>
        <AddTodo theme={theme}
                 newTodo={newTodo}
                 newComplete={newComplete}
                 toggleNewComplete={toggleNewComplete}
                 handleNewTodo={handleNewTodo}
                 createTodo={createTodo}/>
    </div>
)

export default Header