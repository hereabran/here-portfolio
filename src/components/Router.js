import React from 'react';
import { BrowserRouter as Routers, Route } from 'react-router-dom';
import PageMenu from './Menu';

import Prolog from '../pages/Prolog';
import Profile from '../pages/Profile';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';

function Router() {
  console.log(Prolog);
  return (
    <Routers>
      <PageMenu/>
      <Route exact path='/' component={ Prolog }/>
      <Route path='/prolog' component={ Prolog }/>
      <Route path='/profile' component={ Profile }/>
      <Route path='/portfolio' component={ Portfolio }/>
      <Route path='/contact' component={ Contact }/>
    </Routers>
  )
}

export default Router;
