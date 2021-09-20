import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Lobby from './components/Lobby';
import Notes from './components/Notes';
import Resources from './components/Resources';
 
import { BrowserRouter as Router , Switch, Route  } from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="main">
          
 
                  <Navbar/>
                  <Switch>
                  <Route   exact path='/' ><Dashboard/></Route>
                  <Route  exact path='/notes'><Notes/></Route>
                  <Route   exact path='/Lobby'><Lobby/></Route>
                  <Route   exac path='/Resources'><Resources/></Route>
                      
                    
                  </Switch>
          </div>
      </Router>
        
   
  );
}

export default App;
