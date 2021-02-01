import React from 'react';
import {IonList,IonItem,IonLabel,IonAvatar,IonIcon} from '@ionic/react';
import {airplaneOutline} from 'ionicons/icons'

const SearchResult=({searchData,onResultClicked})=>{
    if(searchData.length>0){
        console.log(searchData)
        return(
            <IonList>
                    {searchData.map((item)=>(
                        <IonItem key={item.id} onClick={()=>onResultClicked(item)}>
                            <IonIcon slot="start" icon={airplaneOutline}/>
                            <IonLabel>
                                <h3>{item.name}</h3>
                                <p>{item.iataCode}</p>
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
        )
    }
    return(
        <IonList>
            <IonItem>
                <IonLabel>
                    Search results:
                </IonLabel>
            </IonItem>
        </IonList>
    )
}
export default SearchResult;