import styled  from "styled-components";
export const Navbar = styled.nav`

width:100%;
display:flex;
align-items: center;
`
export const Brand = styled.div`
margin:20px;
width:25%;
font-size:15px;
align-items: center;
justify-content: flex-start;
`



export const NavMenu = styled.ul`
margin:20px;
display:flex;
justify-content: flex-end;
align-items: center;
`

export const NavItem = styled.li`
margin-left:10px;
list-style: none;
;
`

export const NavLink = styled.a`
text-decoration:none;
color:var(--text-color);
text-decoration: ${props => props.active ? "underline" : "none"};
`