import React from 'react'
import { CardClimaMain, ContainerCardClima, H1, H4, P } from './styled'

export const CardClima = ({ stateApi }) => {
    return (
        <ContainerCardClima>
            <CardClimaMain>
                <H4>
                    {stateApi.name}
                </H4>
                <H1>{stateApi.main.temp}</H1>
                <P>
                    {stateApi.weather[0].description}
                </P>
                <P>
                    Max:{stateApi.main.temp_max}
                </P>
                <P>Min:{stateApi.main.temp_min}</P>
                <P>
                    Country: {stateApi.sys.country}
                </P>
            </CardClimaMain>
        </ContainerCardClima>
    )
}
