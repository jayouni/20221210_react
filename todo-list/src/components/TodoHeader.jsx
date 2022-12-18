import styled, { css } from "styled-components";
import { useTodoState } from "../contexts/todos";

function TodoHeader(){

    const date = new Date();
    const dateStr = date.toLocaleDateString("ko-KR",{
        dateStyle:"full",
    });

    const todos = useTodoState();
    const doneCount = todos.filter((todo) =>todo.done).length;
    const percentage = doneCount && Math.round((doneCount/todos.length)*100);

    return (
    <Header>
        <p>{dateStr}</p>
        <span>완료 : {doneCount}/{todos.length}</span>
        <StatusBar percentage={percentage}>
            <span>{percentage}%</span>
        </StatusBar>
        
    </Header>
    );
    

}

const Header = styled.div`
    padding: 20px 10px;
    border: 1px solid #eee;
    
    p{  
        font-size: 1.2rem;
        font-weight: bold;
    }

    span{

        font-size: 0.8 rem;
    }

`;

const StatusBar = styled.div`
    
    height:15px;
    margin-top: 5px;
    background: #ddd;
    text-align: center;
    line-height: 15px;
    position: relative;
    font-size: 0.7rem;

    
    span{
        position: relative;
        z-index: 100;
        color: #fff;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        
    }

    &::before{
        
        content:"";
        display: block;
        
        transform-origin: left;
        ${({ percentage }) => css`
            transform: scaleX(${percentage}%);
        `}
        /* width:${({percentage})=> percentage}%; */

        height: 100%;
        background-color: black;

        transition: 0.25s;
    }


`

export default TodoHeader;