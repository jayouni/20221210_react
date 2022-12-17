import React, { useState, useEffect } from "react";
import Hello from "./components/Hello";
//import Counter from "./components/Counter";
import TodoInput from "./components/TodoInput";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";



function App() {
  
   //const name ="jayoun";
  //  const style ={
  //   color : "red" , 
  //   backgroundColor: "black"
  //  }
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() =>{
    //렌더링이 일어날때마다 실행되는 코드
    console.log("렌더링");
  });

  useEffect(() =>{
    //[]안의 값이 변화가 있을때에만 실행 - count 가 변했을때만 실행
    console.log("count : " , count);
  },[count]);

  useEffect(() =>{
    //[]안의 값이 변화가 있을때에만 실행 - input 가 변했을때만 실행
    console.log("input : " , input);
  },[input]);

  const handleCount = () => {

    setCount(count + 1);

  };

  const handleInput = (e) => {

    setInput(e.target.value);

  };

  const handleToggle = () => {

    setToggle(!toggle);

  };

    return (
    <>
      {/* <Hello text="jayoun" active={false}/>
      <Hello color="red" active/> */}
      {/* 조건부 랜더링 */}
      {/* {true && <Hello />} */}
      {/* <input /> */}
      {/* <p style={style} className="content">안녕하세요 {name}</p> */}

      {/* <Counter /> */}
      {/* <TodoInput /> */}

      {/* <div>
        <h2>{count}</h2>
        <button onClick={handleCount}>+1</button>
          <div>
            <input type="text" onChange={handleInput} value={input} />
            <p>{input}</p>
          </div>
          <button onClick={handleToggle}>Toggle Hello Component</button>
          {toggle && <Hello />}


          <TodoInput />
      </div> */}
      <Todo />

    </>
    );
  
}

export default App;
