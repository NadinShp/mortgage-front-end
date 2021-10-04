import 'modern-normalize/modern-normalize.css';
import { Route, Switch } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import routes from './routes';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

const ManagmentPage = lazy(() => import('./pages/ManagmentPage' /*webpackChunkName: 'managment-page' */));
const CanculatorPage = lazy(()=> import('./pages/CalculatorPage' /*webpackChunkName: 'canculator-page' */));

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path={routes.managment} exact component={ManagmentPage} />
          <Route path={routes.canculator} component={CanculatorPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
