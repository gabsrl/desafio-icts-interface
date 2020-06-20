import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import AddProduct from './pages/add';

/**
 * Retornar container com as rotas da aplicação.
 */
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/product/:id" exact component={AddProduct} />
      </Switch>
    </BrowserRouter>
  );
}


