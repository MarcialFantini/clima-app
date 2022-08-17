
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Slice,AppContainer } from './styled-commond';
import './App.css';
import { CardClima } from './components/CardClima';
import { Navbar } from './components/Navbar';
import { Share } from './components/Share';
import { update } from './store/sliceReducers/climaSlice';
import {fetchData} from './utils/apiFetch'
import { DescriptionTime } from './components/DescriptionTime';

import calor from './assets/temperatura/calor.jpg'
import fresco from './assets/temperatura/fresco.jpg'
import frio from './assets/temperatura/frio.jpg'
import perfecto from './assets/temperatura/perfecto.jpg'


function App() {
  const [state,setState] = useState('')
  const dispatch = useDispatch()
  const stateApi = useSelector(state=> {
        return state.clima.data.main.temp
    })

  useEffect(() => {
   fetchData(dispatch,update,'primera')
  }, [])

  useEffect(()=>{
    if(stateApi <= 5) {
      setState(frio)
    }else if(stateApi > 5 && stateApi <= 15){
      setState(fresco)
     
    }else if(stateApi > 15 && stateApi <= 30){
       setState(perfecto)
    }else if(stateApi > 30){
        setState(calor)
    }
       
  },[stateApi])
  return (
    <AppContainer
    url={state}
    className="App">
      <Navbar />
      <Grid>
         <Slice>
          <CardClima  />
         </Slice>
        
         <Slice>
          <Share />
         <DescriptionTime />

         </Slice>
      </Grid>
    </AppContainer>
  );
}

export default App;
