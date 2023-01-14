import { atom, selector } from "recoil";

export const todosState = atom({
    key : "todos",
    default : [{
        id : 1 , text : "투두 리스트 만들기 ", done :true ,
    },
    {
        id : 2 , text : "리코일 배우기 ", done :true ,
    },
],
});


export const undoneCountState = selector({
    key: "undoneCountState",
    get : ({get}) => {
        const todos = get(todosState);
        
        return todos.filter((todo) => !todo.done).length;
    },
});


export const countState = selector({
    key: "doneCountState",
    get : ({get}) => get(todosState).length ,

});


export const filterState = atom({
    key : "filterState",
    default : "done",
});

export const filteredTodosState = selector({
    key:"filteredTodosState",
    get: ({get}) => {
        const filter = get(filterState);
        const todos = get(todosState);

        switch(filter) {
            case "done" :
                return todos.filter((todo) => todo.done);
            case "undone" :
                return todos.filter((todo) => !todo.done);

            default :
                return todos;
        }
    },
});