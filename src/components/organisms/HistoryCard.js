import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonIcon,
  IonCardContent,
  IonGrid,
} from "@ionic/react";
import departureIcon from "../../icons/departures.svg";
import arrivalIcon from "../../icons/arrivals.svg";

const HistoryCard = ({ data }) => {
  if (data !== undefined) {
    const departureDate = new Date(data.departureDate);
    const departureDateString = departureDate.toLocaleDateString("en-US");
    const returnDate = new Date(data.returnDate);
    const returnDateString = returnDate.toLocaleDateString("en-US");

    return (
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCardHeader>
                <IonCardSubtitle color="primary">
                  Departure
                  <IonIcon src={departureIcon} />
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  From:<b>{data.departureName}</b>
                </p>
                <p>{departureDateString}</p>
              </IonCardContent>
            </IonCol>
            <IonCol>
              <IonCardHeader>
                <IonCardSubtitle color="primary">
                  Arrival
                  <IonIcon src={arrivalIcon} />
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  To:<b>{data.destinationName}</b>
                </p>
                <p>{returnDateString}</p>
              </IonCardContent>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCard>
    );
  }
  return <h3>Error in History Card</h3>;
};

export default HistoryCard;
