import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCurrentUser, signIn } from "../../api/admin";
import { useUserIdDispatch } from "../../data/auth";
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
  
  const dispatch = useUserIdDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    try{
      await signIn(inputs);

      const user = await getCurrentUser();
  
      dispatch(user.id);
  
      navigate("/");

    } catch (err) {
      alert(err.response.data.message);
    }




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