import React from "react";
import styles from "./Result.module.css"

const result = (props) => {
    const state = props.location.state;

    let cocktail = null;

    if (state){
        switch(state.cocktail){
            case("PeachCrush"):
                cocktail=
                <div>
                    <h1>Success</h1>
                    <div className={styles.PeachCrush}>
                    <div className={styles.Cubes}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                </div>
                    </div>
                break;
            default:
                cocktail=<div>
                <h1>Failure</h1>
                <div className={styles.BlackDrink}>
                <div className={styles.Cubes}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
            </div>
                </div>
        }
    }

    console.log(cocktail)

    
    return(<div className={styles.Result}>
        <div className={styles.Cocktail}>
        
        {cocktail}    
        </div>
            
    </div>)
};

export default result;