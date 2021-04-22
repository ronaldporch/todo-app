import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { styled } from '@material-ui/core'
import { useState } from 'react'
import CustomTheme from './components/CustomTheme'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'
import useLocalStorage from './hooks/useLocalStorage'

const CenteredTypography = styled(Typography)({
  textAlign: 'center',
})

const App = () => {
  const [newToDo, setNewToDo] = useState('')
  const [toDoItems, setToDoItems] = useLocalStorage('toDoItems', [])

  const updateNewToDo = (e) => setNewToDo(e.target.value)
  const addToDoItem = () => {
    if (newToDo) {
      setToDoItems([
        ...toDoItems,
        {
          id: new Date().valueOf(),
          completed: false,
          text: newToDo,
        },
      ])
      setNewToDo('')
    }
  }
  const completeToDoItem = (id) => {
    setToDoItems(
      toDoItems.map((toDoItem) =>
        toDoItem.id === id ? { ...toDoItem, completed: true } : toDoItem
      )
    )
  }
  const removeToDoItem = (id) => {
    setToDoItems(toDoItems.filter((toDoItem) => toDoItem.id !== id))
  }

  return (
    <CustomTheme>
      <CssBaseline />
      <Grid container>
        <Grid item xl={4} md={3} sm={2} xs={12}></Grid>
        <Grid item xl={4} md={6} sm={8} xs={12}>
          {/* example of inline styling (for illustrative purposes. External styles preferred.) */}
          <Paper style={{ padding: 10 }}>
            <CenteredTypography variant="h3">
              Audacy To-Do App
            </CenteredTypography>
            <CenteredTypography>
              Enter something to do. Submit It. Click the item to complete.
              Click the trash to remove. Come back later.
            </CenteredTypography>
            <ToDoList
              toDoItems={toDoItems}
              completeToDoItem={completeToDoItem}
              removeToDoItem={removeToDoItem}
            />
            <ToDoForm
              text={newToDo}
              updateNewToDo={updateNewToDo}
              addToDoItem={addToDoItem}
            />
          </Paper>
        </Grid>
      </Grid>
    </CustomTheme>
  )
}

export default App
