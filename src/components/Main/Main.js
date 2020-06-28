import React from "react";
import styles from "./Main.module.css"
import leaf from "../../assets/images/leaf.png";
import maracas from "../../assets/images/maracas.png";
import {Link} from "react-router-dom";

const main = () => (
    <div className={styles.Main}>
        <div className={styles.TitleContainer}>
            <h1 className={styles.Title}>Cocktail Maker</h1>
            <img src={leaf}/>
        </div>
        <div className={styles.StartBtnContainer}>
            <img src={maracas}/>
            <Link to="/create">
                <button className={styles.StartBtn}>Start</button>
            </Link>
            
        </div>
    </div>
);

export default main;