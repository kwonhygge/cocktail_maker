import React from "react";

const summary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}>
            <span>{igKey}</span> : {props.ingredients[igKey]} oz
        </li>
    });
    return(
        <>
            <h3>{props.foundRecipe}</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Make?</p>
        
        </>
    )
}

export default summary;