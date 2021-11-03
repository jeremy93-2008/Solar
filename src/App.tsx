import {Redirect, Route, Switch} from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import { Provider } from "react-redux"

import { Home } from './pages/Home';
import { Solar } from './pages/SolarSystem';

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
import {store} from "./store";

const App = () => (
  <IonApp>
    <Provider store={store}>
      <IonReactRouter>
        <IonRouterOutlet>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/solar" component={Solar} />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </Provider>
  </IonApp>
);

export default App;
