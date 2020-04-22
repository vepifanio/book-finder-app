import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './Components/Search';
import Results from './Components/Results';
import NoResults from './Components/Results/NoResults';

export default function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/search" exact component={Results} />
                <Route path="/search/no-results" component={NoResults} />
            </Switch>
        </BrowserRouter>
    );
};