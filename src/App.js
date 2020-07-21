import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Profile} from './pages/Profile'
import {Alert} from './components/Alert'
import { AlertState } from './components/context/alert/alertState';
import { GitHubState } from './components/context/github/gitHubState';

function App() {
  return (
    <GitHubState>
      <AlertState>
          <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
          <Alert alert={{text: 'what`s wrong'}} />
            <Switch>
            <Route path='/' exact component ={Home} />
            <Route path='/about' component ={About} />
            <Route path='/profile/:name' component ={Profile} />
            <About />

            </Switch>
          </div>
          </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
}

export default App;
