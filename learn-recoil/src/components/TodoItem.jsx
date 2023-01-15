import { useDispatch } from "react-redux";
import { useSetRecoilState } from "recoil";
import { todosState } from "../state/todos";
import { remove, removeTodo, removeTodoAction, toggle, toggleTodo, toggleTodoAction } from "../state/todos_redux";

function TodoItem({todo}) {
    const {id , text, done} = todo;
    //const setTodos = useSetRecoilState(todosState);
    const dispatch = useDispatch();


    const handleDelete = (e) => {
        e.stopPropagation();
        //setTodos((todos) => todos.filter((todo) => todo.id !== id));
        //dispatch({type:"REMOVE_TODO" , id});
        //dispatch(removeTodo(id));
        //dispatch(removeTodoAction(id));
        dispatch(remove({id}));

    }

    const handleToggle = () => {

        //setTodos((todos) => todos.map((todo) => todo.id === id ? {...todo , done : !todo.done} : todo));
        //dispatch({type:"TOGGLE_TODO" , id});
        //dispatch(toggleTodo(id));
        //dispatch(toggleTodoAction(id));
        dispatch(toggle({id}));
    }
  return (
  <li style={{textDecoration : done && "line-through"}} onClick={handleToggle} >
    {text}
    <button onClick={handleDelete}>삭제</button>
    
</li>
  
  );
}

export default TodoItem;