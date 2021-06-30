import * as React from 'react'
import {Brand, Navbar, NavItem, NavMenu, NavLink } from './style';



const PageHeader = () => {
    return (
        <Navbar>
            <Brand>
               <a css={"text-decoration:none;color:var(--text-color)"}href="/"><h1>Freshmove Media</h1></a>
            </Brand>
            <div css={"width:75%;"}>
                <NavMenu css={"display:flex;"}>
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