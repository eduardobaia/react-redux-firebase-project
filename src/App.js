import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import { Navbar } from './components/layout/Navbar'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' component={ Dashboard} />
        </Switch>
      </div>


    </BrowserRouter>
  );
}

export default App;