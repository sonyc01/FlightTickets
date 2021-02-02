import React,{useState,useContext} from 'react';
import AppContext from '../components/AppContext'
import {useHistory,useParams} from 'react-router-dom'
import Template from "../components/templates/MainPageTemplate";
import {Plugins} from '@capacitor/core'

const MainPage=()=>{
    //Capacitor
    const{Storage}=Plugins

    const saveInStorage=async()=>{
        let temp={
            departureName:myContext.departureName,
            departureIata:myContext.departureIata,
            destinationName:myContext.destinationName,
            destinationIata:myContext.destinationIata,
            departureDate:departureDate,
            returnDate:returnDate,
            travelerCount:travelerCount,
            direction:direction
        }
        const history=await Storage.get({key:'history'})
        let historyFromStorage=JSON.parse(history.value)
        if(historyFromStorage===null){
            console.log("NIC neulozene")
            await Storage.set({
                key:'history',
                value:"[]"
            })
            historyFromStorage=await Storage.get({key:'history'})
            historyFromStorage=JSON.parse(historyFromStorage.value)
        }
        await Storage.set({
            key:'history',
            value:JSON.stringify([...historyFromStorage,temp])
        })
    }


    //Context
    const myContext=useContext(AppContext)

    const {push}=useHistory();

//useStates
    const newDate=new Date().toISOString().slice(0, 10)
    const [departureDate,setDepartureDate]=useState(newDate)
    const [returnDate,setReturnDate]=useState(newDate)
    const [travelerCount,setTravelerCount]=useState(1)
    const [direction,setDirection]=useState(false)
    const [showError,setShowError]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")

//Navigation
    const handleOnDepartureSearchClick=()=>push('/DepartureSearch');
    const handleOnDestinationSearchClick=()=>push('/DestinationSearch');
    const handleOnSearchFlightsClick=async()=>{
        if(myContext.departureIata==="" || myContext.destinationIata===""){
            setErrorMessage("Missing Departure or Destination!")
            setShowError(true)
        }
        else if(new Date(departureDate)>new Date(returnDate)){
            setErrorMessage("Date missmatch!")
            setShowError(true)
        }
        else{
            await saveInStorage()
            push(`/SearchFlights/${myContext.departureIata}/${myContext.destinationIata}/${departureDate}/${returnDate}/${travelerCount}`)
        }
    }
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
    const handleOnDismissClick=()=>setShowError(false)

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
        showError={showError}
        errorMessage={errorMessage}
        onDismissClick={handleOnDismissClick}
        />
    )
}

export default MainPage;