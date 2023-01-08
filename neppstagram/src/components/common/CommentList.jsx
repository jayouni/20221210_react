import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { deleteComment, getComments, postComments, subComments } from "../../api/admin";
import { useUserId } from "../../data/auth";

function CommentList({postId}) {

    const [page , setPage] = useState(1);
    const [commentList ,setCommentList] = useState([]);
    const [input , setInput] = useState("");

    const currentUserId = useUserId();

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handlePage = () => {
        setPage(page + 1);
    };


    const getData = useCallback(() => {

        getComments(postId,page).then((data)=> setCommentList(data));
        
    },[postId, page]);

    const handleSubmit = async () => {
        if(input.length === 0) {
            alert("댓글을 입력해주세요.");
            return;
        }
        const result = await postComments({postId , content : input });
       
        setCommentList([result, ...commentList]);
    
       
    };

    const handleDelete = async (commentId) => {

        if(!window.confirm("댓글을 삭제하시겠습니까 ?")) return;

        await deleteComment(commentId);

        setCommentList(commentList.filter((comment) => comment.id !== commentId))
    };


    useEffect(() => {
        getData();
    
    },[getData]);



  return (
    <Container>
        {commentList.map((comment , idx) => (
            <CommentItem key={idx}><p>{comment.content}</p>
                {currentUserId === comment.author.id &&<BtnDelete onClick={() => handleDelete(comment.id)}>삭제</BtnDelete>}
            </CommentItem>
        ))}
        <BtnMore onClick={handlePage}>더보기</BtnMore>
        <InputBox>
        <InputComment placeholder="댓글을 입력해주세요" onChange={handleInput}/>
            <BtnSubmit onClick={handleSubmit}>등록</BtnSubmit>
        </InputBox>
            
    </Container>
  );
}


const Container = styled.div`

    padding: 5px;

`;



const CommentItem = styled.li`

    display: flex;
    justify-content: space-between;

    padding : 5px 0;

`;

const InputBox = styled.div`
    
    display: flex;
    margin-top: 20px;
`;


const InputComment = styled.input`
    flex:1;
    padding : 5px;
    border: none;
    outline: none;
    border-bottom  : 1px solid #eee;
    font-size: 0.8rem;

`;

const BtnSubmit = styled.div`

    padding : 5px 10px ;
    margin-left: 5px;
    border-radius: 20px;
    background-color: rgba(0,0,0,0.4);
    color:#fff;

    font-size: 0.7rem;
    font-weight: 700;

    cursor: pointer;
    user-select: none;
`;


const BtnDelete = styled(BtnSubmit)`
    background-color: rgba(0,0,0,0.2);

    &:hover {
        background-color: red;
    }

`;


const BtnMore = styled.span`
    font-size: 0.8rem;
    font-weight: 700;
    margin-top : 10px;

    cursor: pointer;
    user-select: none;
`;

export default CommentList;