import React from 'react'
import { useSelector } from 'react-redux'
import { P } from '../CardClima/styled'
import { ContainerDes } from './styled'

export const DescriptionTime = () => {
    const stateApi = useSelector(state=> {
        return state.clima.data
    })

  return (
    <ContainerDes>
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
    </ContainerDes>
  )
}
