import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 120px;
    
    background: rgb(255,255,255,0.8);

    display: flex;
    align-items: center;
`

export const LogoContainer = styled.div`
    width:100px;
    height: 100px;

   

    margin: auto 0 auto 40px;
`

export const Img = styled.div`
    width: 100px;
    height: 100px;
    background: url(${props => props.image})  ;
    background-size: 98px 98px;
    border: 1px solid black;
`

export const BarContainer = styled.div`
    width: 100px;
    height: 100px;
    margin: auto 20px auto auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Bar = styled.div`
    width: 100%;
    height: 20px;

    background: black;

    border-radius: 10px;
`