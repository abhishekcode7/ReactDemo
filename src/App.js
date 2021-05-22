
import './App.css';
import Nav from './Nav.js'
import Banks from './Banks.js'
import Dash from './Dash'
import Trans from './Trans'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path='/' exact component={Banks}/>
      <Route path='/dashboard' exact component={Dash}/>
      <Route path='/transactions' component={Trans}/>
    </div>
    </Router>
  );
}

export default App;
