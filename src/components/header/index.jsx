import * as React from 'react'
import {Brand, Logo, Navbar, NavItem, NavMenu, NavLink } from './style';



const PageHeader = () => {
    return (
        <Navbar>
            <Brand>
               <NavLink href="/"><Logo>Freshmove Media</Logo></NavLink>
            </Brand>
            <div css={"width:75%;"}>
                <NavMenu>
                    <NavItem>
                        <NavLink active={"graphicDesign" === window.location.pathname.slice(1)} href="/graphicDesign">Graphic Design</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={"webDesign" === window.location.pathname.slice(1)} href="/webDesign">Web Design</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={"social" === window.location.pathname.slice(1)} href="/social">Social Media</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={"about" === window.location.pathname.slice(1)} href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink active={"contact" === window.location.pathname.slice(1)} href="/contact">Contact</NavLink>
                    </NavItem>
                </NavMenu>
            </div>
        </Navbar>
    )
}





export default PageHeader