
import Header from "./components/Header"
   
import axios from 'axios'
import { useEffect, useState } from "react"
import TodoList from "./components/TodoList"
import useWindowSize from "./components/useWindowSize"
const baseUrl = 'https://todo-app-mohamedobaya.herokuapp.com/'

const App = () => {
  const [ theme, setTheme ] = useState(true) // true --> dark, false --> light 
  const [ todos, setTodos ] = useState([])
  const [ status, setStatus ] = useState('all')
  const [ width ] = useWindowSize() 
  const [ mobile, setMobile ] = useState(false)
  const [ newTodo, setNewTodo ] = useState('')
  const [ newComplete, setNewComplete ] = useState(false)
  const [ activeNum, setActiveNum ] = useState(0)

  

  const showAll = () => setStatus('all')
  const showActive = () => setStatus('active')
  const showCompleted = () => setStatus('completed')

  const toggleTheme = () => changeTheme()
  // ---APIs--- //
  // themes //
  const getTheme = () => {
    axios.get(`${baseUrl}/theme`)
    .then(res => {
      setTheme(res.data[0].theme);
    })
  }
  const changeTheme = () => {
    axios
    .put(`${baseUrl}/theme/change`,
      {
        themeID : "theme",
        theme : !theme
      })
    .then(res => {
      getTheme()
    });
    
  }
  // get all todos //
  const getTodos = () => {
    axios.get(`${baseUrl}/todos`)
    .then(res => {
      setTodos(res.data);
    })
  }
  // todo completness //
  const completeTodo = id => {
    const todo = todos.find(t => t._id === id)
    todo.complete = !todo.complete
    //setTodos(todos.map(t => t._id === id ? todo : t))
    axios
    .put(`${baseUrl}/todo/complete/${id}`,
      todo)
    .then(res => {
      console.log(res.data);
      getTodos()
    });
    
  }
  //  new todo  //
  const toggleNewComplete = () => setNewComplete(!newComplete)
  const handleNewTodo = e =>{
    console.log(newComplete, e.target.value);
    setNewTodo(e.target.value)
  }
  const createTodo = () => {
    axios
    .post(`${baseUrl}/todo/new`, {
      text: newTodo,
      complete: newComplete
    })
    .then(res => {
      getTodos()
    });
  }
  // delete funcs //
  const deleteItem = id => {
    axios
      .delete(`${baseUrl}/todo/delete/${id}`)
      .then(() => {
        getTodos()
      });
  }
  const deleteTodo = id => {
    //const todo = todos.find(t => t._id === id)
    if(window.confirm(`This will be deleted forever !`)){
      deleteItem(id)
      alert("Todo was deleted!");
    }
  }
  const deleteComplete = () => {
    if(window.confirm(`All completed todos will be deleted forever !`)){
      for(let i=0; i<todos.length; i++){
        if(todos[i].complete === true)
          deleteItem(todos[i]._id)
      }
      alert("Todo was deleted!");
    }

    
  }
  useEffect(() => {
    getTodos()
    getTheme()
  },[todos])
  // -- handeling active todos number --//
  useEffect(()=>{
    let count = 0
    for(let i=0 ; i<todos.length ; i++ ){
      if (todos[i].complete === false)
        count++
    }
    setActiveNum(count)
  },[todos])
  // -- handeling mobile view by tracking screen width -- //
  useEffect(() => {
    if(width<823)
      setMobile(true)
    else
      setMobile(false)
  },[width])
  return(
    <div className={`app ${theme? 'app-dark' : 'app-light'}`}>
      <Header theme={theme} 
              toggleTheme={toggleTheme}
              newTodo={newTodo}
              newComplete={newComplete}
              toggleNewComplete={toggleNewComplete}
              handleNewTodo={handleNewTodo}
              createTodo={createTodo}/>
      {/* <TaskShowcase status={status} showAll={showAll} showActive={showActive} showCompleted={showCompleted}/>
      <AddTodo status={status}/>*/}
      <TodoList theme={theme} 
                mobile={mobile}
                todos={todos} 
                status={status} 
                showAll={showAll} 
                showActive={showActive} 
                showCompleted={showCompleted}
                completeTodo={completeTodo}
                activeNum={activeNum}
                deleteTodo={deleteTodo}
                deleteComplete={deleteComplete}/> 
      <div className={`footer ${theme ? 'dark' : 'light' }`}>
          created by 
          <a className={`my-profile ${theme ? 'dark' : 'light' }`} href="https://www.linkedin.com/in/mohamed-obaya/" target="_blank" rel="noreferrer">Mohamed Obaya</a>
          - 
          design by
          <a className={`${theme ? 'dark' : 'light' }`}href="https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW" target="_blank" rel="noreferrer">Frontend Mentor</a>
      </div>
    </div>
  )
}

export default App