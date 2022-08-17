import React from 'react'
import { useSelector } from 'react-redux'
import { CardClimaMain, ContainerCardClima, H1, H4, P } from './styled'

export const CardClima = () => {

    const stateApi = useSelector(state=> {
        return state.clima.data
    })
    
    return (
        <ContainerCardClima>
            <CardClimaMain>
          
            <H4>
                    {stateApi.name}
                </H4>
                <H1>{stateApi.main.temp}</H1>
                
      
            </CardClimaMain>
        </ContainerCardClima>
    )
}
