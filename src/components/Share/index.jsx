import React, { useState } from 'react'
import { H4 } from '../CardClima/styled'
import { Btn, ContainerShare, InputCity } from './styled'

export const Share = ({ setCiudad }) => {
    const [newCity, setNewCity] = useState("")
    const handlerSetNewCity = (event) => {
        setNewCity(event.target.value)
    }
    const handlerSubmit = () => {
        setCiudad(newCity)
        console.log(newCity)
    }
    return (
        <ContainerShare>
            <H4>
                Buscar Ciudad:
            </H4>
            <InputCity
                placeholder='Ingresar ciudad!'
                onChange={handlerSetNewCity}
            />
            <Btn
                onClick={handlerSubmit}
            >Buscar!</Btn>
        </ContainerShare>
    )
}
