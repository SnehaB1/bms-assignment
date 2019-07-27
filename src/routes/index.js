import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { rootPath, assignment1, assignment2 } from "../constants";

import Assignment1 from "../assignment-1/containers";
import Assignment2 from "../assignment-2/containers";
import App from "../App";

class BasicRoutes extends React.PureComponent {
    render() {

        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Route exact path={rootPath} component={App} />
                <Route path={assignment1} component={Assignment1} />
                <Route path={assignment2} component={Assignment2} />
            </BrowserRouter>
        )
    }
}

export default BasicRoutes;