import { useContext } from "react";
import { useEffect } from "react";
import { RemoveContext } from "./Todos";



function TodoList({todos ,onToggle}){
    //투두 리스트 출력(삭제 , 토글)
   

    useEffect(()=> {
        console.log("TodoList 렌더링");
    });


    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
            ))}
        </ul>
    );

}

function TodoItem({todo , onToggle}) {

    const onRemove = useContext(RemoveContext);

    const {text , id , done} = todo;

    const handleRemove = () => {
        if(window.confirm("정말 삭제하시겠습니까 ?")) onRemove(id);

    };

    const handleToggle = () => {
        onToggle(id);
    }

    
    return (
    <li>
        <span onClick={handleToggle} style={{textDecoration : done && "line-through"}}>{text}</span>
        <button onClick={handleRemove}>삭제</button>
    </li>
    );


}




export default TodoList;