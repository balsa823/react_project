import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFound from '../components/NotFound'
import ExpenseDashboardPage from '../components/ExpenceDashboardPage'
import HelpPage from "../components/Help"
import EditExpencePage from "../components/EditExpencePage"
import AddExpencePage from '../components/AddExpencePage'



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpencePage} />
                <Route path="/edit/:id" component={EditExpencePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;





