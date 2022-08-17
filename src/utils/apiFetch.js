const urlPelada = "https://api.openweathermap.org/data/2.5/weather?units=metric&"
const apiKey = "&appid=04c6f917c2fd9188ad8f376db93e941b"
export const fetchData = async (dispatch,update,ciudad) => {
    if (ciudad !== "primera") {
        const res = await fetch(urlPelada + `q=${ciudad}` + apiKey)
        const data = await res.json()
        if(data.cod === 200){
            dispatch(update(data))
            console.log(data)
        }
    } else {
        const res = await fetch(urlPelada + `q=cordoba` + apiKey)
        const data = await res.json()
        if(data.cod === 200){
            dispatch(update(data))
            console.log(data)
        }
    }

}