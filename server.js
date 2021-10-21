const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Todo = require('./models/Todo')
const Theme = require('./models/Theme')


const app = express()

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URI || "mongodb+srv://todoList:todoList@todocluster.yzgvp.mongodb.net/todo-database?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('connected to db'))
.catch(err => console.log(err))

// --- themes apis --- //

app.get('/theme', async(req, res) => {
    const theme = await Theme.find()
    res.json(theme)
})

// --- todos apis ---//
// getting all todos

app.get('/todos', async (req, res) => {
    const todos = await Todo.find()

    res.json(todos)
})
app.put('/theme/change', async (req, res) => {
    const theme = await Theme.findOne({themeID:"theme"})

    theme.theme = !theme.theme
    theme.save()
    res.json(theme)
})

// adding new todo

app.post('/todo/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text,
        complete: req.body.complete
    })
    todo.save()
    res.json(todo)
})

// deleting todo

app.delete('/todo/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id)

    res.json(result)
})

// update completion

app.put('/todo/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)

    todo.complete = !todo.complete
    
    todo.save()
    
    res.json(todo)
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))