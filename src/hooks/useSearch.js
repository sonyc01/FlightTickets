import {useEffect,useState} from 'react';
import axios from 'axios';
import {Plugins} from '@capacitor/core'

const useSearch=(keyword)=>{
    const {Storage}=Plugins
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
                const access_tokenData=await Storage.get({key:'access_token'})
                const access_token=access_tokenData.value
                const result=await axios.get(`https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${keyword}`,{
                    headers:{
                        'Authorization': `Bearer ${access_token}`
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