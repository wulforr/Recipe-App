import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import Recipe1 from "./recipe"

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/recipe/1" component={Recipe1} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default Router