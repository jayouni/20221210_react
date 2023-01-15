import { createAction, createReducer, createSelector, createSlice } from "@reduxjs/toolkit";

//action의 타입 정의

const CREATE_TODO = "todos/create";
const TOGGLE_TODO = "todos/toggle";
const REMOVE_TODO = "todos/remove";


//action을 리턴하는 함수 정의
export const createTodo = (id, text) => {

    return { type : CREATE_TODO , text , id};

};

export const toggleTodo = (id) => {

    return { type : TOGGLE_TODO ,  id};

};

export const removeTodo = (id) => {

    return { type : REMOVE_TODO , id};

};


export const getDoneCount = (state) => state.todos.length;

export const getUndoneCount = (state) => state.todos.filter((todo)=> !todo.done).length;


export const getUndoneCount02 = createSelector((state) => state.todos , (todos) => {
    return todos.filter(todo => !todo.done).length;
});

//@reduxjs/toolkit 제공하는 createSelector를 사용하면 같은 값이 들어왔을때 연산하지 않는다 -> 성능 향상에 도움이 된다.
export const getPercentage = createSelector((state) => state.todos.length , 
    
    getUndoneCount , 
    (totalCount, doneCount ) => Math.floor((doneCount / totalCount) * 100)
    
);



const initialState = [
    {id :1 , text : "redux 배우기" , done : false },
    {id :2 , text : "투두리스트 만들기" , done : true},
];




export function todosReducer(state=initialState, action) {

    switch(action.type) {
        case CREATE_TODO :
            return state.concat({id : action.id , text : action.text , done : false});

        case TOGGLE_TODO :
            return state.map((todo) => todo.id === action.id ? {...todo , done : !todo.done} : todo);

        case REMOVE_TODO :
            return state.filter((todo) => todo.id !== action.id);

        default :
            return state;
    }

}


//액션 생성

export const createTodoAction = createAction("todos/create");
export const toggleTodoAction = createAction("todos/toggle");
export const removeTodoAction = createAction("todos/remove");
//리듀서 생성
export const todosReducer02 = createReducer(initialState , (builder) => {
    builder.addCase(createTodoAction , ( state , action) => {
        //기존 상태값이 직접 변경되면 return x => mutable
        const {id,text} = action.payload;
        state.push({id , text : text , done : false });
        //state.unshift({id , text : text , done : false });

    })
    .addCase(removeTodoAction,(state , action) => {
        //기존 상태값이 유지되면 return 값이 최신 상태값이 된다. => immutable (불변)
        return state.filter((todo) => todo.id !== action.payload);
        
    })
    .addCase(toggleTodoAction,(state , action) => {

        return state.map((todo) => todo.id === action.payload ? {...todo , done : !todo.done} : todo);

    })


});


const todosSlice = createSlice({
    
    name : "todos",
    initialState ,
    reducers : {
        create(state,action) {
            const {id,text} = action.payload;
            state.push({id , text , done : false });
        },
        remove(state,action) {
            const {id} = action.payload;
            return state.filter((todo) => todo.id !== id);

        },
        toggle(state,action) {
            const {id} = action.payload;
            //객체는 참조 복사이기 때문에 mutable 하게 변경해서 return 값 x
            const todo = state.find((todo) => todo.id === id);
            todo.done = !todo.done;

        }
    }
});


export const {create , remove , toggle} = todosSlice.actions;

export default todosSlice.reducer;


