//import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { users } from "./Hello";

function Detail() {
    // const params = useParams();
    // const location = useLocation();
    // const [searchParams] = useSearchParams();
    // const age = searchParams.get("age");
    // const gender = searchParams.get("gender");
    // const name = searchParams.get("name");
    // console.log(parseInt(age));
    // console.log(gender);
    // console.log(name);
    // const {userId} = params;
   const {userId} =useParams();
   const user = users.find((user) => user.id === parseInt(userId));
  return (
    <div>
        <h1>이름 : {user.name} </h1>
        <h1>이메일 : {user.email}</h1>
    </div>
  );
}

export default Detail;