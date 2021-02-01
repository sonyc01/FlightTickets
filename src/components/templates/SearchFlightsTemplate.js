import React from 'react';
import { IonContent, IonHeader,IonToolbar,IonTitle, IonPage,IonSpinner,IonText,IonGrid, IonRow, IonCol,IonButton,IonIcon,IonInput, IonLabel,IonCard,IonDatetime, IonItem, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,IonRange, IonRadioGroup, IonRadio } from '@ionic/react';

const SearchFlightsTemplate=({searchData})=>{
    const renderSearch=()=>{
        const {data,isLoading,error}=searchData
        if(isLoading){
            return(
                <>
                <h3>Loading</h3>
                <IonSpinner name="circles"/>
                </>
            )
        }
        if(error){
            return(
                <IonText>
                    <h3>Error:{error}</h3>
                </IonText>
            )
        }
        return(
            <></>
            //<SearchResult searchData={data} onResultClicked={onResultClicked}/>
        )
    }


    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Flight Search</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {renderSearch()}
            </IonContent>
        </IonPage>
    )
}

export default SearchFlightsTemplate;