import React,{Component} from "react";
import PropTypes from "prop-types";
import styles from "./CockIngredient.module.css"

class CockIngredient extends Component{
    render(){
        let ingredient = null;

        switch(this.props.type){
            case("ice-cube"):
                ingredient=<div className={styles.IceCube}></div>
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