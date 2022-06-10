import React from "react";
import classes from "./Main.module.scss";
import Container from "../Container/Container";

function Main({children}) {
    return <div className={classes.block}>
        <Container>
            <div className={classes.content}>
                {children}
            </div>
        </Container>
    </div>;
}

export default Main;