import React,{Component} from "react";
import Cocktail from "../../components/Cocktail/Cocktail"

class CocktailBuilder extends Component{
    render(){
        return(
            <>
                <Cocktail />
                <div>Cocktail Builder</div>
            </>
        )
    }
}

export default CocktailBuilder;