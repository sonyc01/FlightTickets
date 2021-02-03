import React from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonSpinner,
  IonText,
  IonButtons,
  IonBackButton,
  IonAlert,
  IonCard,
} from "@ionic/react";
import FlightList from "../organisms/FlightList";

const SearchFlightsTemplate = ({
  searchData,
  showBuy,
  onBuyClick,
  onDismissClick,
}) => {
  const renderSearch = () => {
    const { data, isLoading, error } = searchData;
    if (isLoading) {
      return (
        <IonCard className="ion-text-center">
          <IonText className="ion-text-center">
            <h3>Loading</h3>
          </IonText>
          <IonSpinner className="ion-text-center" name="circles" />
        </IonCard>
      );
    }
    if (error) {
      return (
        <IonText>
          <h3>Error:{error}</h3>
        </IonText>
      );
    }
    return <FlightList data={data} onBuyClick={onBuyClick} />;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Flight Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {renderSearch()}
        <IonAlert
          isOpen={showBuy}
          onDidDismiss={onDismissClick}
          header={"Buy successful"}
          message={"This message simulates a buy action"}
          buttons={["OK"]}
        />
      </IonContent>
    </IonPage>
  );
};

export default SearchFlightsTemplate;
