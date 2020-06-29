import React from "react";
import Button from "../../UI/Button/Button";
import {Link} from "react-router-dom";
const summary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}>
            <span>{igKey}</span> : {props.ingredients[igKey]} oz
        </li>
    });
    return(
        <>
            <h3>일치한 레시피: {props.foundRecipe}</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Make?</p>
            <Button btnType="Danger" clicked={props.shakeCanceled}>CANCEL</Button>
            <Link to={
                {
                    pathname:"/result",
                    state:{
                        cocktail:props.foundRecipe
                    }
                }

            }>
                <Button btnType="Success">CONTINUE</Button>
            </Link>
            
        </>
    )
}

export default summary;