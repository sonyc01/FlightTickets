import React,{useState} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import useSearchFlights from '../hooks/useSearchFlights'
import Template from "../components/templates/SearchFlightsTemplate";

const SearchFlights=()=>{
    const {goBack}=useHistory()

    const[showBuy,setShowBuy]=useState(false)

    const{departureIata,
        destinationIata,
        departureDate,
        returnDate,
        travelerCount}=useParams()

    const flights=useSearchFlights(departureIata,destinationIata,departureDate,returnDate,travelerCount)

    const handleOnBuyClick=()=>setShowBuy(true);
    const handleDismissClick=()=>setShowBuy(false);

    return(
    <Template searchData={flights} showBuy={showBuy} onBuyClick={handleOnBuyClick} onDismissClick={handleDismissClick}>
    </Template>
    )
}

export default SearchFlights;