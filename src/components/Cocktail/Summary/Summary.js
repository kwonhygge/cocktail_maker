import React from "react";

const summary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}>
            <span>{igKey}</span> : {props.ingredients[igKey]}
        </li>
    });
    return(
        <>
            <h3>Your Choice</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </>
    )
}

export default summary;