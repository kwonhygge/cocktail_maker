import React from "react";
import styles from "./Recipe.module.css";

const recipe = (props) => (
    <li className={styles.Recipe}>
        <h1>Peach Crush</h1>
        <p>
            Sourmix:2oz
            <br></br>
            Cranberryjuice:2oz
            <br></br>
            peachLiquor:1oz
        </p>
    </li>
)

export default recipe;