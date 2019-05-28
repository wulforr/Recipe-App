import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import Recipe1 from "./recipe"

class Router1 extends React.Component {
    render() {
        return (
            <BrowserRouter>
            {/* Select the proper path between Main page and specific recipe page */}
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/recipe/:id" component={Recipe1} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default Router1