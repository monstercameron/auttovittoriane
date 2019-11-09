import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
import {generateId, CATEGORY, db} from './db/db'
class Route extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router>
                <Route path='/' component={() => <div>test</div>}/>
            </Router>
         );
    }
}
 
export default Route;