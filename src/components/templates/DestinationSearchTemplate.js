import { IonContent, IonHeader,IonToolbar,IonTitle, IonPage,IonGrid, IonRow, IonCol,IonSpinner,IonText,IonSearchbar,IonButtons,IonBackButton } from '@ionic/react';
import SearchResult from '../organisms/SearchResult'
import React from 'react';

const DestinationSearchTemplate=({searchData,searchText,onSearchTextChange,onResultClicked})=>{
    const renderSearch=()=>{
        const {data,isLoading,error}=searchData
        if(isLoading){
            return(
                <IonSpinner name="circles"/>
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
            <SearchResult searchData={data} onResultClicked={onResultClicked}/>
        )
    }

    return(
        <IonPage>   
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton/>
                    </IonButtons>
                    <IonTitle>Departure Search</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar value={searchText} onIonChange={e=>onSearchTextChange(e.detail.value)} debounce="1000"/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            {renderSearch()}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default DestinationSearchTemplate;