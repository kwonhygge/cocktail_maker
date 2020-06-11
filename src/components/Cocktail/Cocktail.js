import React from "react";
import classes from "./Cocktail.module.css"
import CockIngredient from "./CockIngredient/CockIngredient"

const cocktail = (props) => {
    return (
        <div className={classes.Cocktail}>
            <CockIngredient type="ice-cube"/>
        </div>
    )
}

export default cocktail;