import {useEffect,useState} from 'react';
import axios from 'axios';

const useSearchFlights=(departureIata,destinationIata,departureDate,returnDate,travelerCount)=>{
    const [searchData,setSearchData]=useState({
        data:{},
        isLoading: false,
        error:""
    });

    useEffect(()=>{
        const fetchSearch=async()=>{
            try{
                setSearchData({
                    ...searchData,
                    isLoading:true,
                });
                const result=await axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${departureIata}&destinationLocationCode=${destinationIata}&departureDate=${departureDate}&returnDate=${returnDate}&adults=${travelerCount}&nonStop=true&max=20`,{
                    headers:{
                        'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
                    }
                }
                
                )

                setSearchData({
                    ...searchData,
                    data:result.data.data,
                    isLoading:false
                })
            }
            catch({message}){
                setSearchData({
                    ...searchData,
                    isLoading:false,
                    error:message
                })
            }
        }
        
        fetchSearch();
        
    },[])
    return searchData;
}

export default useSearchFlights