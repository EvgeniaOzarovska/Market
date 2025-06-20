import { Redirect, Route, Switch } from 'react-router-dom';
import { Routes } from './Routes';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/System/PageNotFound';
import { ShoppingCart } from '../pages/ShoppingCart';

export const Router = () => (
  <Switch>
    <Route exact path={Routes.Auth.Home} component={Home} />
    <Redirect to={Routes.Auth.DefaultHome} from={'/category'} />
    <Route exact path={Routes.Auth.ShoppingCart} component={ShoppingCart} />
    <Route component={PageNotFound} />
    <Redirect to={Routes.Auth.DefaultHome} from={'/'} />
  </Switch>
);
