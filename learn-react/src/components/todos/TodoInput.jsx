import React, { useRef , useState } from "react";


function TodoInput({onCreate}){
    //투두 생성 => 입력 값 관리

console.log("렌더링 !");

const [input , setInput] = useState("");

const handleInput = (e) => {
    setInput(e.target.value);
}

const inputRef = useRef();

const handleSubmit = () => {

    onCreate(input);
    inputRef.current.focus();
    setInput("");

};


console.log(input);

    return (
        <div>
            <input type="text" onChange={handleInput} value={input} ref={inputRef}/>
            <button onClick={handleSubmit}>등록</button>
        </div>

    );
}

//React.memo로 감싸면 전달받는 프로펄티에 변경사항이 있을 때만 렌더링이 일어난다.
export default React.memo(TodoInput);