import { makeStyles, styled } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import PropTypes from 'prop-types'

// shows examples of two ways to style components: hook api and styled components api

// Styled Components API creates a new component from an existing component with the provided styles applied
const Li = styled('li')({
  listStyleType: 'none',
  paddingTop: 10,
  marginLeft: -25,
  display: 'flex',
})

// makeStyles creates a hook that will be used later
const useStyles = makeStyles({
  toDoItem: {
    // using style props to dynamically change styles
    textDecoration: ({ completed }) => (completed ? 'line-through' : 'initial'),
    flexGrow: 1,
  },
})

const ToDoItem = ({ toDoItem, completeToDoItem, removeToDoItem }) => {
  // Hook API will create a stylesheet with hashed class names applied for each different style.
  const styleProps = {
    completed: toDoItem.completed,
  }
  const classes = useStyles(styleProps)
  return (
    // using styled component
    <Li key={toDoItem.id}>
      <Typography
        variant="h4"
        onClick={() => completeToDoItem(toDoItem.id)}
        // using hashed class name
        className={classes.toDoItem}
      >
        {toDoItem.text}
      </Typography>
      <IconButton onClick={() => removeToDoItem(toDoItem.id)}>
        <DeleteIcon />
      </IconButton>
    </Li>
  )
}

ToDoItem.propTypes = {
  toDoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
}

export default ToDoItem
