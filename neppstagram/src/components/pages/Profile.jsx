import { useEffect, useState } from "react";
import styled from "styled-components";
import { getCurrentUser, patchProfile } from "../../api/admin";

function Profile() {
    const [user, setUser] = useState({});

    const {name , profile_url } = user; 

    const handleChange = (e) => {

        const form = new FormData();
        
        form.append("image", e.target.files[0]);
 
        patchProfile(form).then((res) => console.log(res));
    };

    useEffect(()=>{
        getCurrentUser().then((data) => setUser(data));
    },[]);

    
    console.log(user);
  return (
    <Container>
        <Wrapper>
            <UserName>{name}</UserName>
            <ProfileCircle htmlFor="profile" >
                <img src={profile_url} alt="" />
            </ProfileCircle>
            <input type="file" accept="image/*" id="profile" style={{display : "none"}} onChange={handleChange}/>
            
       </Wrapper>
    </Container>
  );
}


const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const UserName = styled.h2`
    
`;


const ProfileCircle = styled.label`
    
    display: flex;
    justify-content: center;
    align-items: center;

    width: 200px;
    height: 200px;

    margin-top: 30px;

    border :3px solid #eee;
    border-radius: 50%;

    overflow: hidden;
    cursor: pointer;

    img {
        width: 300px;
    }
`;


export default Profile;