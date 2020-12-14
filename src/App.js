import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {DarkContext} from './context/DarkContext';
import Header from './components/Header';
import AllCountry from './routes/AllCountry';
import CountryRoute from './routes/CountryRoute';

function App() {
  const  {dark} = useContext(DarkContext);
  return (
    <div className={`app ${dark && 'dark' }`}>
      <Header />
      <main className="app__main">
        <BrowserRouter>
          <Switch>
          <Route path="/:name">
                <CountryRoute />
            </Route>
            <Route path="/">
                <AllCountry />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
