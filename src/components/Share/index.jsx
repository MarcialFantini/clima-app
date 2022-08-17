import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../../store/sliceReducers/climaSlice'
import { fetchData } from '../../utils/apiFetch'
import { H4 } from '../CardClima/styled'
import { Btn, ContainerShare, InputCity } from './styled'

export const Share = () => {
    const dispatch = useDispatch()

    const [newCity, setNewCity] = useState("")
    const handlerSetNewCity = (event) => {
        setNewCity(event.target.value)
    }
    const handlerSubmit = () => {
        fetchData(dispatch,update,newCity)
    }
    return (
        <ContainerShare>
            <H4>
                Buscar Ciudad:
            </H4>
           
                <InputCity
                placeholder='Ingresar ciudad!'
                onChange={handlerSetNewCity}
                value={newCity}
            />
            <Btn
                onClick={handlerSubmit}
            >Buscar!</Btn>
            
        </ContainerShare>
    )
}
