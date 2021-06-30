import * as React from 'react'
import {Brand, Navbar, NavItem, NavMenu, NavLink } from './style';

const PageHeader = () => {
    return (
        <Navbar>
            <Brand>
                <h1>Freshmove Media</h1>
            </Brand>
            <div css={"width:75%;"}>
                <NavMenu css={"display:flex;"}>
                    <NavItem>
                        <NavLink href="/graphicDesign">Graphic Design</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/webDesign">Web Design</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/social">Social Media</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>
                </NavMenu>
            </div>
        </Navbar>
    )
}





export default PageHeader