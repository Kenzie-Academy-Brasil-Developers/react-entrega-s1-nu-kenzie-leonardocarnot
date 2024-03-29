import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import App from "./App";
import Home from "./pages/Home";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/" component={App}/>
            </Switch>
        </BrowserRouter>

    )
}

export default Routes;