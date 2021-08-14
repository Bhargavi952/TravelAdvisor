import axios from 'axios'
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"



const getPlacesData = async (sw,ne)=>{
    try{
        const {data:{data}} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude:ne.lat,
              bl_longitude: sw.lng,
              tr_longitude:ne.lng ,
            },
            headers: {
              'x-rapidapi-key': 'f4f26c82a3mshf943b66ea833a53p1d1d51jsne26093cd6922',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data

    }
    catch(err){
            console.log(err)
    }
}
export  default getPlacesData