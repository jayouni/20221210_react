import styled, { css } from "styled-components";
import { AiOutlineCheck } from 'react-icons/ai';
import { useTodoDispatch } from "../contexts/todos";
import { BsFillTrashFill } from 'react-icons/bs';
import { useState } from "react";

function TodoItem({todo}){
    const {id, text , done} =todo;

    const [disapper , setDisapper ] = useState(false);

    const dispatch = useTodoDispatch();

    const handleRemove = ()=> {

        setDisapper(true);
        setTimeout(()=> {
            dispatch({type : "REMOVE_TODO" , id});
        },400);
        

    };
    // const icon = done ? (
    //     <AiFillCheckCircle size={20} />
    // ) : ( <AiOutlineCheckCircle size={20}  />);

    
    return (
    <ItemBlock disapper={disapper}>

        <CheckCircle onClick={() => dispatch({type:"TOGGLE_TODO", id})} done={done}>
            {<AiOutlineCheck />}
        </CheckCircle>

        <p>{text}</p>
        <TrashIcons onClick={handleRemove} />
    </ItemBlock>
    );
    

}

const ItemBlock = styled.li`
    display: flex;
    align-items: center;
    padding : 10px 10px ;
    border-bottom: 1px solid #eee;

    font-size : 0.9rem;
    user-select: none;

    p{
        flex:1;
    }

    transition: transform 0.4s;
    ${({disapper}) => disapper && css`
        transform: translate(100%);
    `}
`;

const TrashIcons = styled(BsFillTrashFill)`
    cursor: pointer;
    &:hover{
        
        color:red;
    }

`

const CheckCircle = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width:20px;
    height: 20px;

    border: 2px solid black;
    border-radius: 50%;

    ${({done}) => done && css`
        background-color: black;
        color:white;
    `}

    cursor: pointer;

`;

export default TodoItem;