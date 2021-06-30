import styled  from "styled-components";

export const Brand = styled.div`
width:25%;
font-size:15px;
align-items: center;
justify-content: flex-start;
`

export const Navbar = styled.nav`
width:100%;
display:flex;
align-items: center;
`

export const NavMenu = styled.ul`
display:flex;
justify-content: flex-end;
align-items: center;
`

export const NavItem = styled.li`
margin-left:10px;
list-style: none;
`

export const NavLink = styled.a`
text-decoration:none;
color:var(--text-color);
`