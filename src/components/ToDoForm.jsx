import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  form: {
    display: 'flex',
  },
  textField: {
    flexGrow: 1,
  },
})

// Since components are just functions, can provide default values to props.
const NewToDoForm = ({ text = '', updateNewToDo, addToDoItem }) => {
  const classes = useStyles()
  const submitOnEnter = ({ code }) => {
    if (code === 'Enter') {
      addToDoItem()
    }
  }
  return (
    <div className={classes.form}>
      <TextField
        value={text}
        onChange={updateNewToDo}
        onKeyDown={submitOnEnter}
        size="small"
        fullWidth
        className={classes.textField}
      />
      <Button onClick={addToDoItem}>Submit</Button>
    </div>
  )
}

// Props types will generate errors in browser console in dev build if correct type is not provided.
NewToDoForm.propTypes = {
  text: PropTypes.string,
  updateNewToDo: PropTypes.func,
  addToDoItem: PropTypes.func,
}

export default NewToDoForm
