import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 30px;

    width: 90%;

    margin: 80px auto;
`

export const Slice = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 30px;
`

export const AppContainer = styled.div`
    background-image: url(${props=>props.url});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    min-height: 100vh;
    height: auto;
    padding-bottom: 40px;
    
`