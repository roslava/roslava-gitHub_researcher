import React from "react";
import styles from "./Container.module.scss";

function Container({children}) {
    return <div className={styles.block}>{children}</div>;
}

export default Container;
