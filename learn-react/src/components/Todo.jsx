import { useCallback, useMemo, useRef, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function countUndoneTodo(todos){

    console.log("할 일 세는 중 ... ");
    return todos.filter(todo => !todo.done).length;


}

function Todo(){
    const [todos,setTodos] = useState([{id:1, text:"투두리스트 만들기",date : "2022/12/11", done: true}]);


    //useMemo : 특정 값이 변할때에만 연산을 하고 , 나머지 경우는 기존값을 재사용한다. 성능 개선.
    const undoneTodoCount = useMemo(() => countUndoneTodo(todos), [todos]);
    console.log(undoneTodoCount);
    

    const inputRef = useRef();

    // useRef로 관리되는 값은 변경되어도 리렌더링이 발생하지 않는다. => 렌더링과 별개로 변수처럼 사용한다.
    const nextId = useRef(2);

    

    //객체의 프로퍼티 참조하는 방법 2가지 중 하나 객체.프로퍼티 ["문자열"]
    const handleSubmit = (inputs) => {
       //객체나 배열을 업데이트 할 때는 불변성을 지켜야 한다 => 지키지 않으면 상태 변화를 감지 할 수 없다.
       // => 새로운 객체를 생성하는 방식으로 작성한다.
       // setTodos([...todos,input]);

       setTodos(todos.concat({
        ...inputs,
        id : nextId.current,
        done : false,
    
    }));
       
    nextId.current++;
    //inputRef.current.focus();

};

    const onRemove = (id) => {
        //배열에서 특정 항목 제거
        // => 배열에서 필터링한거를 업데이트 함수의 인자로 전달
        // => 한개만 필터링 해야된다 => 선택한 요소 빼고 나머지만 반환한 것이 곧 제거효과
        setTodos(todos.filter((todo) => todo.id !== id));

    }    

    const onToggle = (id) => {
        //todo 의 done 값을 반전시키는 기능 만들어보기 => 배열 => map => id 값에 따라 done 값 반전 시킬지 말지.
        // setTodos(todos.map(todo => {
        //     if(id === todo.id) return {...todo , done: !todo.done};
        //     else return todo;
        // })
        // );
        setTodos(todos.map((todo) => 
        todo.id === id ? {...todo, done: !todo.done} : todo
        )
        );
    };

    return <>
    

        <TodoInput handleSubmit={handleSubmit} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    
    
    </>
}


export default Todo;