//useReducer 로 투두리스트 상태관리 해보기

import { TodoProvider } from "../../contexts/todos";
import TodoCreate from "./TodoCreate";
import Main from "../MainPage/Main";
import TodoList from "./TodoList";




function Todos(){
    
    return(
        <>
        <TodoProvider>
            <div className="title">
                <h1>할일목록</h1>
                    <TodoCreate  />
                    <TodoList />
                </div>
            <Main />
        </TodoProvider>

        </>
    );
}

export default Todos;