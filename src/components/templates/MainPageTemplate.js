import { IonContent, IonHeader,IonToolbar,IonTitle, IonPage,IonGrid, IonRow, IonCol,IonButton,IonIcon,IonInput, IonLabel,IonCard,IonDatetime, IonItem, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle,IonRange, IonRadioGroup, IonRadio,IonAlert } from '@ionic/react';
import {search,calendar,book} from 'ionicons/icons'
import React from 'react';

const MainPageTemplate=({
    departureInputText,
    onDepartureInputTextChange,
    onDepartureSearchClick,
    destinationInputText,
    onDestinationInputTextChange,
    onDestinationSearchClick,
    departureDate,
    onDepartureDateChange,
    returnDate,
    onReturnDateChange,
    travelerCount,
    onTravelerCountChange,
    direction,
    onDirectionChange,
    onSearchFlightsClick,
    onHistoryClick,
    showError,
    onDismissClick,
    errorMessage})=>{

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Flight Tickets</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonLabel>Departure</IonLabel>
                                <IonInput type="search" color="primary" disabled={false} placeholder="Press Search" value={departureInputText} onIonChange={e=>onDepartureInputTextChange(e.detail.value)}/>
                            </IonCol>
                            <IonCol>
                                <IonButton color="primary" expand="block" onClick={onDepartureSearchClick}>
                                <IonIcon slot="start" icon={search}/>
                                Departure Search
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonCard>
                <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonLabel>Destination</IonLabel>
                                <IonInput type="search" color="primary" disabled={false} placeholder="Press Search" value={destinationInputText} onIonChange={e=>onDestinationInputTextChange(e.detail.value)}/>
                            </IonCol>
                            <IonCol>
                                <IonButton color="primary" expand="block" onClick={onDestinationSearchClick}>
                                <IonIcon slot="start" icon={search}/>
                                Destination Search
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>
                            Departure Date
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonDatetime displayFormat="YYYY-MM-DD" value={departureDate} onIonChange={e => onDepartureDateChange(e.detail.value)}/>
                            <IonIcon icon={calendar} slot="end"/>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>
                            Return Date
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonDatetime displayFormat="YYYY-MM-DD" value={returnDate} onIonChange={e => onReturnDateChange(e.detail.value)}/>
                            <IonIcon icon={calendar} slot="end"/>
                        </IonItem>
                    </IonCardContent>
                </IonCard>


                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>
                            Travelers
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem>
                            <IonRange min={1} max={5} step={1} ticks={true} pin={true} snaps={true} value={travelerCount} onIonChange={e=>onTravelerCountChange(e.detail.value)}/>
                        </IonItem>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonCardHeader>
                        <IonCardSubtitle>
                            Direction
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonRadioGroup value={direction} onIonChange={e=>onDirectionChange(e.detail.value)}>
                            <IonItem>
                                <IonLabel>Return</IonLabel>
                                <IonRadio slot="start" value={false}/>
                            </IonItem>
                        </IonRadioGroup>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton color="primary" expand="block" onClick={onSearchFlightsClick}>
                                    <IonIcon slot="start" icon={search}/>
                                        Search
                                    </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton color="primary" expand="block" onClick={onHistoryClick}>
                                <IonIcon slot="start" icon={book}/>
                                History
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
                <IonAlert
          isOpen={showError}
          onDidDismiss={onDismissClick}
          cssClass='my-custom-class'
          header={'Alert'}
          message={errorMessage}
          buttons={['OK']}
        />

            </IonContent>
        </IonPage>
    )
}

export default MainPageTemplate;