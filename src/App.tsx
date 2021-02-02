import React,{useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import AppContext from './components/AppContext'
import Home from './pages/Home';
import MainPage from './pages/MainPage'
import DepartureSearch from "./pages/DepartureSearch"
import DestinationSearch from './pages/DestinationSearch'
import HistoryPage from './pages/HistoryPage'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SearchFlights from './pages/SearchFlights';

//Global context variables



const App: React.FC = () =>{
  const [departureName,setDepartureName]=useState("")
  const [departureIata,setDepartureIata]=useState("")
  const [destinationName,setDestinationName]=useState("")
  const [destinationIata,setDestinationIata]=useState("")


  const appData={
    departureName:departureName,
    departureIata:departureIata,
    destinationName:destinationName,
    destinationIata:destinationIata,
    setDepartureName,
    setDepartureIata,
    setDestinationName,
    setDestinationIata,
  }
  
return(
  <AppContext.Provider value={appData}>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/MainPage" />} />
        <Route path="/MainPage/" component={MainPage}/>
        <Route path="/DepartureSearch" component={DepartureSearch}/>
        <Route path="/DestinationSearch" component={DestinationSearch}/>
        <Route path="/SearchFlights/:departureIata/:destinationIata/:departureDate/:returnDate/:travelerCount" component={SearchFlights}/>
        <Route path="/History" component={HistoryPage}/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </AppContext.Provider>
)};

export default App;
