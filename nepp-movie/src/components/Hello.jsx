import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

export const users = [
    {id:1 , name :"jayoun", email : "gjwkdbs517@naver.com"},
    {id:2 , name :"test2", email : "test2@naver.com"},
    {id:3 , name :"test3", email : "test3@naver.com"},
];


function Hello(){
    // Link 태그를 클릭하는것 외에 url 을 변경할 때 사용한다.
    const navigate = useNavigate();
    const onChangeLink = (id) => {
        if(window.confirm("이동하시겠습니까 ?")) navigate(`/hello/${id}`);
    };

    return (
    <div>
        <h1>Hello</h1>
        <p>Hello 페이지 입니다</p>

        <ul>
            {users.map((user) => (
            <li key={user.id}>
                <p onClick={() => onChangeLink(user.id)}>{user.name}</p>
            </li>
            ))}
        </ul>
    </div>
    );

}

export default Hello;

