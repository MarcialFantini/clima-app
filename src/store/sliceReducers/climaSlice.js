import { createSlice } from "@reduxjs/toolkit"

const urlPelada = "https://api.openweathermap.org/data/2.5/weather?units=metric&"
const apiKey = "&appid=04c6f917c2fd9188ad8f376db93e941b"

const initialState = {
    data:{
    "coord": {
        "lon": -58.3772,
        "lat": -34.6132
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 14.27,
        "feels_like": 13.16,
        "temp_min": 11.63,
        "temp_max": 14.97,
        "pressure": 1007,
        "humidity": 54
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.57,
        "deg": 320
    },
    "clouds": {
        "all": 100
    },
    "dt": 1660697587,
    "sys": {
        "type": 1,
        "id": 8224,
        "country": "AR",
        "sunrise": 1660645949,
        "sunset": 1660685003
    },
    "timezone": -10800,
    "id": 3435910,
    "name": "Buenos Aires",
    "cod": 200
}
}


export const climaSlice = createSlice({
    name:"clima",
    initialState,
    reducers:{
        update:(state,action)=>{
            state.data = {...action.payload}
        }
    }
})

export const climaReducer = climaSlice.reducer
export const {update} = climaSlice.actions

