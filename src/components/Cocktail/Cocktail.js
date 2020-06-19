import React from "react";
import classes from "./Cocktail.module.css"
import CockIngredient from "./CockIngredient/CockIngredient"

const cocktail = (props) => {
    let transformedIngredient=Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map(
            ((_,i)=>{
                return <CockIngredient key={igKey+i} type={igKey} />
            })
        )
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);

    if(transformedIngredient.length===0){
        transformedIngredient = <p>Please start adding ingredients!</p>
    }


    return (
        <div className={classes.Cocktail}>
            {transformedIngredient}
        </div>
    )
}

export default cocktail;