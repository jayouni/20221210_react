function TodoList({todos, onToggle, onRemove}){

    return  (
    <ul>
        {todos.map((todo) => (
            <li key={todo.id} style={{textDecoration : todo.done && "line-through"}}
            onClick={()=>onToggle(todo.id)}
            >
                {todo.text} ({todo.date})
                <button onClick={(e) => {
                    //이벤트 전파를 멈춘다.
                    e.stopPropagation();
                    onRemove(todo.id);
                }}>X</button></li>
        ))}
    </ul>
    )
    

}

export default TodoList;