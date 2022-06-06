import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import ReactDOM from "react-dom";
import { Alert } from "@alfalab/core-components/alert";
import { Button } from "@alfalab/core-components/button";


function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
               
                            <Alert hasCloser>
                                Вам одобрено. Согласитесь на предложение
                            </Alert>

                            <Button view="primary">Primary</Button>

                            <Button
                                view="secondary"
                                style={{ marginLeft: 5 + "px" }}
                            >
                                Secondary
                            </Button>

                            <Button view="tertiary">Tertiary</Button>

                            <Button view="link">Link</Button>

                            <Button view="ghost">Ghost</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
