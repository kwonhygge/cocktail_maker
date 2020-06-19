import React,{Component} from "react";
import PropTypes from "prop-types";
import styles from "./CockIngredient.module.css"

class CockIngredient extends Component{
    render(){
        let ingredient = null;

        switch(this.props.type){
            case("sourmix"):
                ingredient=<div className={styles.SourMix}></div>
                break;
            case("cranberry"):
                ingredient=<div className={styles.CranBerry}></div>
                break;
            case("peachliquor"):
                ingredient=<div className={styles.PeachLiquor}></div>
                break;
            default:
                ingredient=null;
        }
        return ingredient;
    }
}

CockIngredient.propTypes={
    type: PropTypes.string.isRequired
};

export default CockIngredient;