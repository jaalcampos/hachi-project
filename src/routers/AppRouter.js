import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../components/pages/home/Home'

export const AppRouter = () => {
    return (
        <Router>    
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        </Router>
    )
}
