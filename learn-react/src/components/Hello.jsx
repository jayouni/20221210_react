//컴포넌트 만들기
//함수 이름은 파스칼 케이스로 작성해야한다.
//무조건 대문자 시작

import { useState , useEffect } from "react";

    /* 

      JSX
      1. 무조건 하나의 태그로 감싸서 반환해야 한다; =>프래그먼트를 이용하면 하나로 묶을 수 있다.
      2. 닫는 태그를 생략할 때는 셀프 클로징 태그를 사용해야 한다.
      3. JSX 안에 자바스크립트 값을 포함시킬 때는 {} 안에 작성한다.
      4. 스타일 속성에 객체 형태로 전달한다. => 여러단어인 속성은 카멜 케이스 사용한다.
      5. class 는 className 속성으로 할당한다.
      6. 컴포넌트는 무조건 대괄호로 시작한다.



    */
      
function Hello({text,active,color}){
    //console.log(props);
    //const {text,active} = props;
    const [input, setInput] = useState("");

    const handleInput = (e) => {

        setInput(e.target.value);
        console.log("Hello 컴퍼넌트 렌더링");
      };

    useEffect(() =>{
        //렌더링이 일어날때마다 실행되는 코드
        console.log("Hello 컴퍼넌트 렌더링 ");
    });

    useEffect(() =>{
        //렌더링이 일어날때마다 실행되는 코드
        console.log("Hello 컴퍼넌트 마운트 됌 ");
    },[]);

      
    useEffect(() =>{
        //화면에 처음에 나타날 때 한번만 실행 된다. => setTimeout, setInterval , 서버에서 데이터 받아오기, 라이브러리 연동
        console.log("Hello 컴퍼넌트 마운트 됌 ");
       const timer = setInterval(() => {
            console.log("1초경과");
        },1000);

        return () => {
            //화면에서 사라질 때(언마운트) 실행된다. => 클린업 함수 , clearTimeout, clearInterval , 인스턴스 삭제
            console.log("언마운트 됌");
            clearInterval(timer);
        };

    },[]);



    return (
    <>
    <h1 style={{color : active && color}}>Hello {text} {active && "!"}</h1>
    <input type="text" onChange={handleInput} />
    </>
    );
}

Hello.defaultProps = {
    text: "React",
    color: "black",
};

export default Hello;