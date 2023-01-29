import React from 'react';
import { Route,Switch} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutMe'; 
import Projects from './Pages/Projects';

function App() {
  return (
    <Switch>
      <Route  path='/'>
        <Home/>
     </Route>
     <Route path='/projects'>
       <Projects/>
     </Route>
     <Route path='/About'>
      <About/>
     </Route>
    </Switch>
  );
}

export default App;
