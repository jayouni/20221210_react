import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signIn } from "../../api/admin";
import { useInputs } from "../../hook/useInputs";
import AdminForm from "../admin/AdminForm";
import { Button } from "../common/button";
import { Input } from "../common/input";

function SignIn() {

  const [inputs, handleInputs] = useInputs({
    email:"",
    password:"",

  });

  const navigate = useNavigate();
 

  const onSubmit = (e) => {
    e.preventDefault();
  
    signIn(inputs).then((res) => {
      console.log("로그인성공");
      window.localStorage.setItem("access-token" , res.data.data.token);
      navigate("/");
    });

};

const toSignUp = (e) => {
  e.preventDefault();

  navigate("/signup");

}

  return (
  <AdminForm title="로그인" onSubmit={onSubmit}>
    <InputWrapper>
      <Input type="email" name="email" placeholder="email" onChange={handleInputs}/>
      <Input type="password" name="password" placeholder="password" onChange={handleInputs}/>
    
    <BtnWrapper>
        <Button bgColor="#999" type="submit">로그인</Button>
        <Button onClick={toSignUp}>회원가입</Button>
    </BtnWrapper>
    </InputWrapper>
    </AdminForm>
  );
}



const InputWrapper = styled.div`
  

`;

const BtnWrapper = styled.div`
  
  margin-top: 30px;

`
export default SignIn;