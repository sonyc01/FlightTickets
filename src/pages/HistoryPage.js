import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {Plugins} from '@capacitor/core'
import Template from "../components/templates/HistoryPageTemplate";
import useFlightHistory from '../hooks/useFlightHistory'

const HistoryPage=()=>{
    const history=useFlightHistory()
    const {goBack}=useHistory()
    const {Storage}=Plugins;

    const handleCancelClicked=async()=>{
        await Storage.remove({key:'history'})
        goBack()
    }

    return(
        <Template historyData={history} onClearClick={handleCancelClicked}/>
    )
}
export default HistoryPage