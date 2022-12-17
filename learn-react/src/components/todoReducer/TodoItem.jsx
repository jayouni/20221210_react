
import { useTodoDispatch } from "../../contexts/todos";

function TodoItem({todo}){
    const {id, text ,done} = todo;

    const dispatch = useTodoDispatch();
    
    return (
        <li>
        <span onClick={() => dispatch({type:"TOGGLE_TODO" , id})}style={{textDecoration : done && "line-through"}}>{text}</span>
        <button onClick={()=> dispatch({type:"REMOVE_TODO",id})}>X</button>
        </li>
    );
}

export default TodoItem;