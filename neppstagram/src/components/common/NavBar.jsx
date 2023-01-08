import { Link } from "react-router-dom";
import styled from "styled-components";
import {MdHome,MdSearch} from"react-icons/md";
import {CgProfile} from"react-icons/cg";
import {AiOutlinePlusCircle} from"react-icons/ai";


function NavBar() {
  return (
    <Container>
        <NavItem><StyledLink to="/"><MdHome size={24} /></StyledLink></NavItem>
        <NavItem><StyledLink to="search"><MdSearch  size={24} /></StyledLink></NavItem>
        <NavItem><StyledLink to="edit"><AiOutlinePlusCircle  size={24} /></StyledLink></NavItem>
        <NavItem><StyledLink to="profile"><CgProfile size={24} /></StyledLink></NavItem>
    </Container>
  );
}

const Container = styled.ul`
    
    display: flex;
    border-top: 1px solid #ddd;
`;


const NavItem = styled.li`

    flex : 1;

    & + & {
        border-left: 1px solid #ddd;
    }

`;

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    padding : 10px 0;
    
`;

export default NavBar;