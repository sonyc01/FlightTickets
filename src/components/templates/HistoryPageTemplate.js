import React from "react";
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonBackButton,
  IonButton,
} from "@ionic/react";
import HistoryList from "../organisms/HistoryList";

const HistoryPageTemplate = ({ historyData, onClearClick }) => {
  const renderHistory = () => {
    const { isLoading, error, data } = historyData;
    if (isLoading) {
      return <h3>Loading History</h3>;
    }
    if (error) {
      return <h3>Error in History Template</h3>;
    }
    return <HistoryList data={data} />;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Flight History</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={onClearClick}>Clear</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>{renderHistory()}</IonContent>
    </IonPage>
  );
};

export default HistoryPageTemplate;
