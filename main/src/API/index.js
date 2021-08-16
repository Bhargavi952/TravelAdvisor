import axios from 'axios'
// const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"



const getPlacesData = async (type ,sw,ne)=>{
    try{
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude:ne.lat,
              bl_longitude: sw.lng,
              tr_longitude:ne.lng ,
            },
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data

    }
    catch(err){
            console.log(err)
    }
}
const getWeatherData = async (lat ,lng)=>{
  try{
    const {data} = await axios.get("https://community-open-weather-map.p.rapidapi.com/find",{
      params: {
        lon: lng,
        lat: lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
      }
    })
    return data
  }
  catch(err){
    console.log(err)
  }
}
export   {getPlacesData , getWeatherData}