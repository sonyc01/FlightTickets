import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import FlightItineraries from './FlightItineraries';


const FlightList=({data,onBuyClick})=>{
    if(data.length>0){
        return(
            <>
            {data.map(item=>(
                <FlightItineraries data={item} onBuyClick={onBuyClick}/>
            ))}
            </>
        )
    }
    return(
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle color="danger">
                    No Flights found
                </IonCardTitle>
            </IonCardHeader>
        </IonCard>
    )
}

export default FlightList