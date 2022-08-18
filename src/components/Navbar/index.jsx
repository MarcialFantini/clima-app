import React from 'react'
import {
    NavbarContainer,
    LogoContainer,
    Img,
    
} from './styled'
import Lindo from '../../assets/MF.png'


export const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Img image={Lindo} />
            </LogoContainer>
            
        </NavbarContainer>
    )
}
