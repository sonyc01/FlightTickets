import {useEffect,useState} from 'react';
import {Plugins} from '@capacitor/core'
import axios from 'axios';

const useToken=()=>{
    const{Storage}=Plugins
    const [tokenData,setTokenData]=useState({
        data:{},
        isLoading: false,
        error:""
    });

    useEffect(()=>{
        const fetchToken=async()=>{
            try{
                setTokenData({
                    ...tokenData,
                    isLoading:true,
                });
                const result=await axios.get(`http://localhost:3000/token`)
                await Storage.remove({key:'access_token'})
                await Storage.set({
                    key:'access_token',
                    value:result.data.access_token
                })

                setTokenData({
                    ...tokenData,
                    data:result.data.data,
                    isLoading:false
                })
            }
            catch({message}){
                setTokenData({
                    ...tokenData,
                    isLoading:false,
                    error:message
                })
            }
        }
        
        fetchToken();

    },[])
    return tokenData;
}

export default useToken