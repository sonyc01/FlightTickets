import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonList,
  IonIcon,
  IonCardContent,
  IonGrid,
  IonText,
} from "@ionic/react";
import departureIcon from "../../icons/departures.svg";
import arrivalIcon from "../../icons/arrivals.svg";

const FlightSegment = ({ segments }) => {
  if (segments !== undefined) {
    return (
      <IonList>
        {segments.map((item) => {
          const departureDate = new Date(item.departure.at);
          const departureDateString = departureDate.toLocaleDateString("en-US");
          const departureTimeString = departureDate
            .toLocaleTimeString("sk-SK")
            .slice(0, -3);
          const arrivalDate = new Date(item.arrival.at);
          const arrivalDateString = arrivalDate.toLocaleDateString("en-US");
          const arrivalTimeString = arrivalDate
            .toLocaleTimeString("sk-SK")
            .slice(0, -3);

          return (
            <IonCard key={item.id}>
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
                        From:<b>{item.departure.iataCode}</b>
                      </p>
                      <p>{departureDateString}</p>
                      <p>{departureTimeString}</p>
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
                        To:<b>{item.arrival.iataCode}</b>
                      </p>
                      <p>{arrivalDateString}</p>
                      <p>{arrivalTimeString}</p>
                    </IonCardContent>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          );
        })}
      </IonList>
    );
  }
  return (
      <IonText>
          <h3>
              No Flight Segments found
          </h3>
      </IonText>
  )
};

export default FlightSegment;
