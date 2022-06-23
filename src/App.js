
import { useEffect, useState } from 'react';
import './App.css';
import { CardClima } from './components/CardClima';
import { Navbar } from './components/Navbar';
import { Share } from './components/Share';
import { fetchData } from './utils/apiFetch';

function App() {
  const [stateApi, setStateApi] = useState({
    name: "Cordoba",

    weather: [{ description: "" }],
    main: {
      temp_max: 0,
      temp_min: 0,
      temp: 0
    },
    sys: { country: "" }
  })
  const [ciudad, setCiudad] = useState('primera')


  useEffect(() => {
    fetchData(ciudad, setStateApi)
  }, [ciudad])
  return (
    <div className="App">
      <Navbar />
      <Share setCiudad={setCiudad} />
      <CardClima stateApi={stateApi} />
    </div>
  );
}

export default App;
