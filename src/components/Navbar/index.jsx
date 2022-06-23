import React from 'react'
import {
    NavbarContainer,
    LogoContainer,
    Img,
    BarContainer,
    Bar
} from './styled'
import Lindo from './lindo.png'


export const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Img image={Lindo} />
            </LogoContainer>
            <BarContainer>
                <Bar></Bar>
                <Bar></Bar>
                <Bar></Bar>
            </BarContainer>
        </NavbarContainer>
    )
}
