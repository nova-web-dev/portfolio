import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import registerServiceWorker from './registerServiceWorker';
const { render } = ReactDOM;
const target = document.querySelector('#root') as HTMLElement;

import HomePage from '~/components/pages/home';
import AboutPage from '~/components/pages/about';
import WorkPage from '~/components/pages/work';
import CVPage from '~/components/pages/cv';
import OutBuildingPage from '~/components/pages/outbuilding';
import BusyHivePage from '~/components/pages/busy-hive';
import DesignsPage from '~/components/pages/designs';
import LogosPage from '~/components/pages/logos';

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/home" component={HomePage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/work" component={WorkPage} />
      <Route exact path="/cv" component={CVPage} />
      <Route exact path="/designs" component={DesignsPage} />
      <Route exact path="/outbuilding" component={OutBuildingPage} />
      <Route exact path="/busy-hive" component={BusyHivePage} />
      <Route exact path="/logos" component={LogosPage} />

    </Switch>
  </BrowserRouter>,
  target,
);

registerServiceWorker();
