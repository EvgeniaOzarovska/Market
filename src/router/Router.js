import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './routes';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/System/PageNotFound';

export const Router = () => (
  <Switch>
    <Route exact path={ROUTES.Auth.Home} component={Home} />

    {/** System pages */}
    <Route component={PageNotFound} />
  </Switch>
);
