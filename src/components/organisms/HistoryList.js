import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import React from 'react';
import HistoryCard from './HistoryCard';

const HistoryList=({data})=>{
    if(data===undefined || data===null){
        data=[]
    }
    if(data.length>0){
        return(
            <>
            {data.map(item=>(
                <HistoryCard data={item}/>
            ))}
            </>
        )
    }
    return(
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle color="danger">
                    No History found
                </IonCardTitle>
            </IonCardHeader>
        </IonCard>
    )
}

export default HistoryList;