
const ListTodo = ({data, handleEdit, handleDelete}) => {
    return (
        <div>
            <h1>Todo List : </h1>
            {data.map((todolist) => {
                return (
                    <p key={todolist.id}>
                        {todolist.data}
                        <button onClick={() => handleEdit   (todolist.id)}>Edit</button> 
                        <button onClick={() => handleDelete(todolist.id)}>Delete</button>
                    </p>
                )
            })}
        </div>
    )
}

export default ListTodo;