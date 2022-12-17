import { useReducer } from "react"

// 커스텀 훅 만들기 

function reducer(state , action) {
    switch(action.type){
        case "CHANGE_INPUT":
            return {...state, [action.name] : action.value };
            default:
                return state;
        

    }
}

export function useInputs(initialState){
    const[state, dispatch] = useReducer(reducer,initialState);
    return [state , dispatch];
}