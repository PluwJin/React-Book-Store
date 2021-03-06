import * as React from 'react';
import Detail from './pages/detail';
import Create from './pages/create';

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import List from './pages/list';

class App extends React.Component{


    render(){
        return(
            <Router>
            <div className="App">
                
                    <Route path="/" exact component={List}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/create" component={Create}/>
                
           

            </div>
            </Router>
            
        );
    }
}



export default App;