import React,{useState,useContext} from 'react';
import AppContext from '../components/AppContext'
import {useHistory,useParams} from 'react-router-dom'
import Template from "../components/templates/MainPageTemplate";
import {Plugins} from '@capacitor/core'

const MainPage=()=>{
    //Capacitor
    const{Storage}=Plugins


    //Context
    const myContext=useContext(AppContext)

    const {push}=useHistory();

//useStates
    const newDate=new Date().toISOString().slice(0, 10)
    const [departureDate,setDepartureDate]=useState(newDate)
    const [returnDate,setReturnDate]=useState(newDate)
    const [travelerCount,setTravelerCount]=useState(1)
    const [direction,setDirection]=useState(false)

//Navigation
    const handleOnDepartureSearchClick=()=>push('/DepartureSearch');
    const handleOnDestinationSearchClick=()=>push('/DestinationSearch');
    const handleOnSearchFlightsClick=()=>push(`/SearchFlights/${myContext.departureIata}/${myContext.destinationIata}/${departureDate}/${returnDate}/${travelerCount}`)
    const handleOnHistoryClick=()=>push('/History')

//Handlers
    const handleDepartureInputTextChange=(value)=>myContext.setDepartureName(value)
    const handleDestinationInputTextChange=(value)=>myContext.setDestinationName(value)
    const handleDepartureDateChange=(value)=>{
        if(value.length>10){
            setDepartureDate(value.substring(0,10))
        }
        else{
            setDepartureDate(value)
        }
    }
    const handleReturnDateChange=(value)=>{
        if(value.length>10){
            setReturnDate(value.substring(0,10))
        }
        else{
            setReturnDate(value)
        }
    }
    const handleTravelerCountChange=(value)=>setTravelerCount(value)
    const handleDirectionChange=(value)=>setDirection(value)

    return(
        <Template
        departureInputText={myContext.departureName}
        onDepartureInputTextChange={handleDepartureInputTextChange}
        onDepartureSearchClick={handleOnDepartureSearchClick}
        destinationInputText={myContext.destinationName}
        onDestinationInputTextChange={handleDestinationInputTextChange}
        onDestinationSearchClick={handleOnDestinationSearchClick}
        departureDate={departureDate}
        onDepartureDateChange={handleDepartureDateChange}
        returnDate={returnDate}
        onReturnDateChange={handleReturnDateChange}
        travelerCount={travelerCount}
        onTravelerCountChange={handleTravelerCountChange}
        direction={direction}
        onDirectionChange={handleDirectionChange}
        onSearchFlightsClick={handleOnSearchFlightsClick}
        onHistoryClick={handleOnHistoryClick}
        />
    )
}

export default MainPage;