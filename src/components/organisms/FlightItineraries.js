import React from 'react'
import {IonCard,IonCardHeader,IonRow,IonCol,IonCardSubtitle,IonList,IonItem,IonLabel,IonAvatar,IonIcon, IonCardContent, IonGrid, IonButton, IonHeader, IonCardTitle, IonText} from '@ionic/react';
import {arrowDown,logoEuro} from 'ionicons/icons'
import FlightSegment from './FlightSegment';

const FlightItineraries=({data,onBuyClick})=>{
    if(data!=undefined){
        //console.log(data[0].itineraries)
        return(
            <>
            <IonCard className="ion-text-center">
                <IonText className="ion-text-center" color="primary">
                    <h4>
                    Flight Offer
                    </h4>
                </IonText>
                <FlightSegment segments={data.itineraries[0].segments} />
                <IonIcon size="large" icon={arrowDown}/>
                <FlightSegment segments={data.itineraries[1].segments} />
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                                <IonText color="primary">
                                <h3>
                                    {data.price.total} 
                                    <IonIcon size="small" icon={logoEuro}/>
                                </h3>
                                </IonText>
                        </IonCol>
                        <IonCol className="ion-text-center">
                            <IonButton onClick={onBuyClick}>Buy</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCard>
            </>
        )
    }
    return(
        <IonCard>
            <IonText color="danger" className="ion-text-center">
        <h3>ERROR in itineraries</h3>
        </IonText>
        </IonCard>
    )
}

export default FlightItineraries;