import {useEffect,useState} from 'react';
import axios from 'axios';

const useSearch=(keyword)=>{
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
                const result=await axios.get(`https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${keyword}`,{
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
        if(keyword.length>=3){ //maybe move this so that it doesnt run on every type
        fetchSearch();
        }
    },[keyword])
    return searchData;
}

export default useSearch