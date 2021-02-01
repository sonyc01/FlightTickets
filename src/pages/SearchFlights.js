import React,{useState} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import useSearchFlights from '../hooks/useSearchFlights'
import Template from "../components/templates/SearchFlightsTemplate";

const SearchFlights=()=>{
    const {goBack}=useHistory()
    const{departureIata,
        destinationIata,
        departureDate,
        returnDate,
        travelerCount}=useParams()

    const flights=useSearchFlights(departureIata,destinationIata,departureDate,returnDate,travelerCount)
    return(
    <Template searchData={flights}>
    </Template>
    )
}

export default SearchFlights;