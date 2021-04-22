import ToDoItem from './ToDoItem'

const ToDoList = ({ toDoItems = [], completeToDoItem, removeToDoItem }) => (
  <ul>
    {toDoItems.map((toDoItem) => (
      <ToDoItem
        key={toDoItem.id}
        toDoItem={toDoItem}
        completeToDoItem={completeToDoItem}
        removeToDoItem={removeToDoItem}
      />
    ))}
  </ul>
)

export default ToDoList
