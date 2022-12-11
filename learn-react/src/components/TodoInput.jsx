import { useCallback } from "react";
import { useState ,useRef, useMemo} from "react";



function TodoInput({handleSubmit}) {
    const [inputs,setInputs] = useState({
        text: "",
        date: "",

    });

    const handleInput = useCallback ((e) => {
        console.log(e.target.name ,e.target.value);
        const {name, value} = e.target;
        const newInputs = {...inputs,[name] : value};
        setInputs(newInputs);
        /* setInputs({
            ...inputs,
           [name] : value,
            
        }); */
        
    },

    [inputs]
    );


    return (
        <div>
            <input 
            type="text" 
            onChange={handleInput} 
            value={inputs.text} 
            name="text"
            />

            <input 
            type="text" 
            name="date" 
            onChange={handleInput} 
            value={inputs.date} 
            />

            <button onClick={() => handleSubmit(inputs)}>등록</button>

        </div>

    );

}


export default TodoInput;