import React from "react";
import classes from "./Footer.module.scss";
import Container from "../Layout/Container/Container";

function Footer() {
    return (
        <div className={classes.block}>
            <Container>
                <div className={classes.content}>
                    Тестовое задание
                </div>
            </Container>
        </div>
    );
}

export default Footer;
