const urlPelada = "https://api.openweathermap.org/data/2.5/weather?units=metric&"
const apiKey = "&appid=04c6f917c2fd9188ad8f376db93e941b"
export const fetchData = async (ciudad, callback) => {
    if (ciudad !== "primera") {
        const res = await fetch(urlPelada + `q=${ciudad}` + apiKey)
        const data = await res.json()
        callback(data)
        console.log(data)
    } else {
        const res = await fetch(urlPelada + `q=cordoba` + apiKey)
        const data = await res.json()
        callback(data)
        console.log(data)
    }

}