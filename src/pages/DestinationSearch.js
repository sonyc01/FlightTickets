import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom'
import useSearch from '../hooks/useSearch'
import AppContext from '../components/AppContext'
import Template from "../components/templates/DestinationSearchTemplate";

const DestinationSearch=()=>{

    const{goBack}=useHistory()
    //Global Context
    const myContext=useContext(AppContext)

    //useState
    const [searchText,setSearchText]=useState("")
    const searchData=useSearch(searchText);

    //handlers
    const handleSearchTextChange=(value)=>{setSearchText(value)}
    const handleOnResultClicked=(value)=>{
        myContext.setDestinationName(value.name)
        myContext.setDestinationIata(value.iataCode)
        goBack()
    }

    return(
        <Template searchData={searchData}
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
        onResultClicked={handleOnResultClicked}
        />
    )
}

export default DestinationSearch;