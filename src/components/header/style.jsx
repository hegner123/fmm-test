import styled  from "styled-components";
export const Navbar = styled.nav`
background:var(--bg-2);
width:100%;
display:flex;
align-items: center;
`
export const Brand = styled.div`
margin:20px;
width:25%;
font-size:1rem;
align-items: center;
justify-content: flex-start;
`
export const Logo = styled.h1`
text-decoration: none;
color:var(--color-2);
`

export const NavMenu = styled.ul`
margin:20px;
display:flex;
justify-content: flex-end;
align-items: center;
`

export const NavItem = styled.li`
margin-right:5%;
list-style: none;
`

export const NavLink = styled.a`
text-decoration:none;

font-size:1rem;
color: ${props => props.active ? "var(--color-1)" : "#fff"};
`