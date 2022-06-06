import React from "react";
import ReactDOM from "react-dom";

import Header from "../components/header";
import { ListHeader } from "@alfalab/core-components/list-header";
import { FormControl } from "@alfalab/core-components/form-control";
import { Button } from "@alfalab/core-components/button";
function News() {
    return (
        <div>
            <Header />
            <h1>News</h1>
            <div className="container">
                <ListHeader title="Новости" description="банка" />
                <div className="container">
                    <div style={{ width: 240 }}>
                        <FormControl block={true} label="Label" hint="Hint" />
                    </div>
                    <Button size={"xl"} view="primary">
                        Кнопка
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default News;
