import React from "react";
import Recipe from "./Recipe/Recipe";
import styles from "./Recipes.module.css"


const recipes = () => (
    <ul className={styles.Recipes}>
            <h1 className={styles.Title}>Recipe</h1>
            <Recipe />
    </ul>
);

export default recipes;